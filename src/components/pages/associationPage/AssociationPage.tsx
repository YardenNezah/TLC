/* eslint-disable react-hooks/exhaustive-deps */
import "./AssociationPage.scss";
import VolunteeringPage from "../volunteeringPage/VolunteeringPage";
import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import { useAppDispatch } from "../../../store/store";
import { useEffect, Fragment, useState } from "react";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";
import SubmitButton from "../../layout/button/SubmitButton";
import axios from "axios";

const AssociationPage = () => {
  const dispatch = useAppDispatch();
  const [associations, setAssociations] = useState([])
  const [volunteering, setVolunteering] = useState([])
  const fetchData = async () => {
    try {
      const aRes = await axios.get("http://localhost:8080/auth/getByRole/association")
      const bRes = await axios.get("http://localhost:8080/volunteering")
      setAssociations(aRes.data.result)
      setVolunteering(bRes.data.result)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    dispatch(fetchAssociations());
    dispatch(fetchVolunteering());
  }, []);

  const [openVolunteeringCard, setOpenVolunteeringCard] = useState(false);
  const [selectedVolunteering, setSelectedVolunteering] = useState({});
  
  
  function formatDate(Idate: any) {
    const date = new Date(Idate);
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    //const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${currentDate}/${monthString}/${date.getFullYear()}`;
  }
  
  const openVolunteeringCardHandler = (volunteer: object) => {
    setOpenVolunteeringCard(true);
    setSelectedVolunteering(volunteer);
  };



  const params: any = useParams();
  const associationDetails: any = associations.filter(
    (item: any) => item.name === params.associationName
  );


  const associationVolunteering = volunteering.filter(
    (item: any) => item.associationId === associationDetails[0]._id
  );

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
          <VolunteeringPage volunteering={selectedVolunteering}></VolunteeringPage>
        </Fragment>
      )}


      {!openVolunteeringCard && (
      <div className="association-page-container">
        <img
          src={associationDetails[0]?.associationDetails.image}
          alt="association"
          className="association-page-img"
          srcSet={`${associationDetails[0]?.associationDetails.bigImage} 800w`}
        ></img>
        <h1>{params.associationName}</h1>
        <h2>{associationDetails[0]?.associationDetails.description}</h2>

        <div className="feed">
          {associationVolunteering.map((volunteering: any, index:any) => (
           <div className="feed-container" key={index}>
           <span className="volunteering-name">{volunteering.name}</span>
           <span className="volunteering-date">
             {formatDate(volunteering.date) !== "NaN/0NaN/NaN"
               ? formatDate(volunteering.date)
               : "Unknown Date"}
           </span>

           <span className="address">{volunteering.address}</span>
           <div className="submit-volunteer-button">
             <SubmitButton
               value={"Sign up here"}
               onClick={() => openVolunteeringCardHandler(volunteering.name)}
             ></SubmitButton>
           </div>
         </div>
          ))}
        </div>
      </div>)}       
    </Fragment>
  );
};

export default AssociationPage;
