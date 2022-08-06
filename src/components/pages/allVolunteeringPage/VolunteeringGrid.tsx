/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { useAppDispatch } from "../../../store/store";
import "./AllVolunteeringPage.scss";
import SubmitButton from "../../layout/button/SubmitButton";
import VolunteeringPage from "../volunteeringPage/VolunteeringPage";
import { Link } from "react-router-dom";

const VolunteeringGrid = ({ filter }: any) => {
  const dispatch = useAppDispatch();
  const { volunteering } = useSelector((state: any) => state.volunteering);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchVolunteering());
    dispatch(fetchAssociations());
  }, []);

  const [openVolunteeringCard, setOpenVolunteeringCard] = useState(false);
  const [selectedVolunteering, setSelectedVolunteering] = useState({});

  const openVolunteeringCardHandler = (volunteer: object) => {
    setOpenVolunteeringCard(true);
    setSelectedVolunteering(volunteer);
  };

  // Function definition with passing two arrays
  function findCommonElement(array1: any, array2: any) {
    // Loop for array1
    for (let i = 0; i < array1.length; i++) {
      // Loop for array2
      for (let j = 0; j < array2.length; j++) {
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (array1[i] === array2[j]) {
          // Return if common element found
          return true;
        }
      }
    }

    // Return if no common element exist
    return false;
  }

  const passFilter: any = (item: any) => {
    const splitedKeywords: any = localStorage.getItem("keywords")?.split(",");
    let foryouSuggestions:any = [];

    volunteering?.map((item: any) => {
      if (item?.keywords[0]?.length !== 0) {
        item.keywords[0]?.split(",").map((vol: any) => {
          if(splitedKeywords.includes(vol)) foryouSuggestions.push(item);
        });
      }
    });

    console.log(foryouSuggestions);

    const volunteeringFormated: any = formatDate(item?.date);

    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const nextDay = date.getDate() + 1;
    const today = date.getDate() + "/" + month + "/" + date.getFullYear();
    const tommorrow = nextDay + "/" + month + "/" + date.getFullYear();

    switch (filter) {
      case "all":
        return true;
      case "today":
        if (today === volunteeringFormated) return true;
        else return false;
      case "tommorrow":
        if (tommorrow === volunteeringFormated) return true;
        else return false;
      case "foryou":
        if (foryouSuggestions.includes(item)) return true;
        return false;
      default:
        return true;
    }
  };

  function formatDate(Idate: any) {
    const date = new Date(Idate);
    const currentMonth = date.getMonth() + 1;
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    //const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${currentDate}/${monthString}/${date.getFullYear()}`;
  }
  const filteredArr = volunteering.filter((item: any) => passFilter(item));

  const numberOfPages = Math.ceil(filteredArr.length / 8);
  let pages = [];
  for (let page = 1; page <= numberOfPages; page++) {
    pages.push(
      <Link
        key={page}
        className="page"
        to={`/volunteering/${page}`}
        onClick={() => setPageNumber(page)}>
        {page}
      </Link>
    );
  }

  return (
    <Fragment>
      {openVolunteeringCard && (
        <Fragment>
          <button
            className="volunteering-container"
            onClick={() => setOpenVolunteeringCard(false)}
          ></button>
          <button
            className="close-volunteering-page"
            onClick={() => setOpenVolunteeringCard(false)}
          >
            X
          </button>
          <br />
          <VolunteeringPage
            volunteering={selectedVolunteering}
          ></VolunteeringPage>
        </Fragment>
      )}
      {filteredArr.length > 8 ? (
      <div className="feed">
        {!openVolunteeringCard &&
            filteredArr.slice(pageNumber * 8 - 8, pageNumber * 8).map((item: any, index: any) => {
              return (
                <div className="feed-container" key={index}>
                  <span className="volunteering-name">{item.name}</span>
                  <span className="volunteering-date">
                    {formatDate(item.date) !== "NaN/0NaN/NaN"
                      ? formatDate(item.date)
                      : "Unknown Date"}
                  </span>

                  <span className="address">{item.address}</span>
                  <div className="submit-volunteer-button">
                    <SubmitButton
                      value={"Sign up here"}
                      onClick={() => openVolunteeringCardHandler(item.name)}
                    ></SubmitButton>
                  </div>
                </div>
              );
          })}     
           <div className="pagination">{pages}</div>
      </div>
      ): (
        <div className="feed">
        {!openVolunteeringCard &&
            filteredArr.map((item: any, index: any) => {
              return (
                <div className="feed-container" key={index}>
                  <span className="volunteering-name">{item.name}</span>
                  <span className="volunteering-date">
                    {formatDate(item.date) !== "NaN/0NaN/NaN"
                      ? formatDate(item.date)
                      : "Unknown Date"}
                  </span>

                  <span className="address">{item.address}</span>
                  <div className="submit-volunteer-button">
                    <SubmitButton
                      value={"Sign up here"}
                      onClick={() => openVolunteeringCardHandler(item.name)}
                    ></SubmitButton>
                  </div>
                </div>
              );
          })}     
      </div>
      )}

    </Fragment>
  );
};

export default VolunteeringGrid;
