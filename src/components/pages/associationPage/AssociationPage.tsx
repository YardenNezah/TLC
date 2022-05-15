import clock from "../../../assets/clock-icon.svg";
import VolunteeringSmallCard from "../../layout/card/VolunteeringSmallCard";
import "./AssociationPage.scss";
import VolunteeringPage from "../volunteeringPage/VolunteeringPage";
import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect, Fragment, useState } from "react";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";
import SubmitButton from "../../layout/button/SubmitButton";

const AssociationPage = () => {
  const dispatch = useAppDispatch();
  const { associations } = useSelector((state: any) => state.associations);
  const { volunteering } = useSelector((state: any) => state.volunteering);

  useEffect(() => {
    dispatch(fetchAssociations());
    dispatch(fetchVolunteering());
  }, []);

  const [openVolunteeringCard, setOpenVolunteeringCard] = useState(false);
  const [volunteeringName, setVolunteeringName] = useState("");
  
  const openVolunteeringCardHandler = (volunteer: string) => {
    setOpenVolunteeringCard(true);
    setVolunteeringName(volunteer);
  };



  const params: any = useParams();
  const associationDetails = associations.filter(
    (item: any) => item.name === params.associationName
  );

  const associationVolunteering = volunteering.filter(
    (item: any) => item.association === params.associationName
  );

  const filteredArr = associationVolunteering;

  return (
    <Fragment>
      <Header />
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
          <VolunteeringPage volunteering={volunteeringName}></VolunteeringPage>
        </Fragment>
      )}


      {!openVolunteeringCard && (
      <div className="association-page-container">
        <img
          src={associationDetails[0].desktopImage}
          alt="association"
          className="association-page-img"
          srcSet={`${associationDetails[0].bigImage} 800w`}
        ></img>
        <h1>{params.associationName}</h1>
        <h2>{associationDetails[0].description}</h2>

        <div className="feed">
          {filteredArr.map((volunteering: any) => (
            <div className="feed-container">
              <div>
                <h1>{volunteering.name}</h1>
              </div>
              <div>
                <h3>{volunteering.date}</h3>
              </div>
              <div><h3>{volunteering.address}</h3></div>
              <SubmitButton value={"Sign up here"} onClick={() => openVolunteeringCardHandler(volunteering.name)}></SubmitButton>

            </div>
          ))}
        </div>
        <Footer />
      </div>)}
    </Fragment>
  );
};

export default AssociationPage;
