/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./VolunteeringPage.scss";
import line from "../../../assets/line-7-copy-2.png";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect, useState } from "react";
import SubmitButton from "../../layout/button/SubmitButton";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";
import axios from "axios";

const VolunteeringPage = (props: { volunteering: object }) => {
  const dispatch = useAppDispatch();
  const { volunteering } = useSelector((state: any) => state.volunteering);

  const [feedback, setFeedback] = useState("");
  const [selectedAssociation, setSelectedAssociation]: any = useState();

  const fetchAssociation = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/auth/getById/${volunteeringDetails.associationId}`
      );
      setSelectedAssociation(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(fetchVolunteering());
    fetchAssociation();
  }, []);

  const volunteeringDetails = volunteering.filter(
    (item: any) => item.name === props.volunteering
  )[0];

  const inputsContainer = (content: string) => {
    return (
      <div>
        <p>{content}</p>
        <img src={line} alt="line" className="line"></img>
      </div>
    );
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/volunteering/volunteer",
        {
          volunteeringId: volunteeringDetails._id,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("token") || "",
          },
        }
      );
      setFeedback(res.data);
    } catch (err: any) {
      setFeedback(err.response.data || "unknown error. please try again.");
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
    <div className="volunteering">
        <div className="data-content">
          <h3 className="volunteering-title">{props.volunteering}</h3>
          <br></br>
          <p>
            <strong>Association:</strong>{" "}
            {selectedAssociation?.name || "Deleted Association"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {formatDate(volunteeringDetails.date) !== "NaN-0NaN-NaN"
              ? formatDate(volunteeringDetails.date)
              : "Unknown Date"}
          </p>
          <p>
            <strong>Address:</strong> {volunteeringDetails?.address}{" "}
          </p>
          <p>
            <strong>Keywords:</strong> {volunteeringDetails?.keywords}{" "}
          </p>
          <span>{volunteeringDetails.description}</span>{" "} <br /><br />
          <span><strong>Sounds Good? Sign up here</strong></span><br /><br />
          <SubmitButton onClick={() => handleSignUp()} value={"Sign up"} />
          <b>{feedback}</b>
        </div>
      </div>
  );
};

export default VolunteeringPage;
