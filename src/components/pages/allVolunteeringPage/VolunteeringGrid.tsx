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

  // const passFilter = (item: any) => {
  //   const volunteeringDay = item.date.slice(0, 9);
  //   const date = new Date();
  //   const month = date.getMonth() + 1;
  //   const nextDay = date.getDate() + 1;
  //   const today = date.getFullYear() + "-" + month + "-" + date.getDate();
  //   const tommorrow = date.getFullYear() + "-" + month + "-" + nextDay;
  //   switch (filter) {
  //     case "all":
  //       return true;
  //     case "today":
  //       if (today === volunteeringDay) return true;
  //       else return false;
  //     case "tommorrow":
  //       if (tommorrow === volunteeringDay) return true;
  //       else return false;
  //     default:
  //       return true;
  //   }
  // };

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
          volunteering.map((item: any) => {
              return (
                <div className="feed-container" key={item.name}>
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <div>
                    <h3>{item.date}</h3>
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
          })}
      </div>
    </Fragment>
  );
};

export default VolunteeringGrid;
