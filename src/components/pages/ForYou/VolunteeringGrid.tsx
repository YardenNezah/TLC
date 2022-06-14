import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { useAppDispatch } from "../../../store/store";
import "./ForYou.scss";
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

  function formatDate(Idate: any) {
    const date = new Date(Idate)
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${currentDate}`;
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
          <VolunteeringPage volunteering={selectedVolunteering}></VolunteeringPage>
        </Fragment>
      )}
      <div className="feed">
        {!openVolunteeringCard &&
          volunteering.filter((item: any)=> {
            const keywords: any = localStorage.getItem('keywords')
            const found = item?.keywords[0]?.split(',').some((r: any)=> keywords.split(',').indexOf(r) >= 0)
            return found
          }).map((item: any) => {
              return (
                <div className="feed-container" key={item.name}>
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <div>
                    <h3>{formatDate(item.date) !== "NaN-0NaN-NaN" ? formatDate(item.date) : "Unknown Date"}</h3>
                  </div>
                  <div>
                    <h3>{item.address}</h3>
                  </div>
                  <SubmitButton
                    value={"Sign up here"}
                    onClick={() => openVolunteeringCardHandler(item.name)}
                  ></SubmitButton>
                </div>
              );
          }) || "No Matching Volunteers."}
      </div>
    </Fragment>
  );
};

export default VolunteeringGrid;
