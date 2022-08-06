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

const VolunteeringGrid = ({ filter }: any) => {
  const dispatch = useAppDispatch();
  const { volunteering } = useSelector((state: any) => state.volunteering);

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

  const passFilter:any = (item: any) => {
    const foryouSuggestions: any = volunteering?.filter((item: any) => {
      const keywords: any = localStorage.getItem("keywords");
      const found: any =
        item?.keywords[0]?.length !== 0 ? item.keywords[0]?.split(",") : "";
      const foundResult = found?.some(
        (r: any) => keywords?.split(",").indexOf(r) >= 0
      );
      return foundResult;
    })[0]?.keywords;
    const volunteeringDay: any = item?.date?.slice(0, 10);
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const nextDay = date.getDate() + 1;
    const today = date.getFullYear() + "/" + month + "/" + date.getDate();
    const tommorrow = date.getFullYear() + "/" + month + "/" + nextDay;
    let keywordIsEqual: boolean;
    const isForYou:any = foryouSuggestions?.map((suggestion: any) => {
      item?.keywords?.map((keyword: any) => {
        if (suggestion === keyword) keywordIsEqual = true;
        else keywordIsEqual = false;
      });
      return keywordIsEqual;
    });

    switch (filter) {
      case "all":
        return true;
      case "today":
        if (today === volunteeringDay) return true;
        else return false;
      case "tommorrow":
        if (tommorrow === volunteeringDay) return true;
        else return false;
      case "foryou":
        if (isForYou) return true;
        return false;
      default:
        return true;
    }
  };

  function formatDate(Idate: any) {
    const date = new Date(Idate);
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    //const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${currentDate}/${monthString}/${date.getFullYear()}`;
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
      <div className="feed">
        {!openVolunteeringCard &&
          volunteering.map((item: any, index: any) => {
            if (passFilter(item))
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
    </Fragment>
  );
};

export default VolunteeringGrid;
