import "./AssociationPage.scss";
import VolunteeringPage from "../volunteeringPage/VolunteeringPage";
import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
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
  
  const openVolunteeringCardHandler = (volunteer: object) => {
    setOpenVolunteeringCard(true);
    setSelectedVolunteering(volunteer);
  };



  const params: any = useParams();
  const associationDetails: any = associations.filter(
    (item: any) => item.name === params.associationName
  );

  const associationVolunteering = volunteering.filter(
    (item: any) => item.associationId === associationDetails._id
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
          <br />
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
          {associationVolunteering.map((volunteering: any) => (
            <div className="feed-container" key={volunteering.name}>
              <div>
                <h1>{volunteering.name}</h1>
              </div>
              <div>
                <h3>{volunteering.date}</h3>
              </div>
              <div><h3>{volunteering.address}</h3></div>
              <SubmitButton value={"Sign up here"} onClick={() => openVolunteeringCardHandler(volunteering)}></SubmitButton>
            </div>
          ))}
        </div>
      </div>)}       
    </Fragment>
  );
};

export default AssociationPage;
