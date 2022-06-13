import "./VolunteeringPage.scss";
import Input from "../../layout/form/Input";
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

  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    dispatch(fetchVolunteering());
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
      const res = await axios.post("http://localhost:8080/volunteering/volunteer", {
        volunteeringId: volunteeringDetails._id
      }, {
        headers: {
          'auth-token': localStorage.getItem("token") || ""
        }
      })
      setFeedback(res.data)
    }
    catch(err: any) {
      setFeedback(err.response.data || "unknown error. please try again.")
    }
  }

  return (
    <div className="volunteering">
      <div className="volunteering-details">
        <div className="data-content">
          <h3 className="volunteering-title">{props.volunteering}</h3>
          <br></br>
          <p>
            <span>Date:</span> {volunteeringDetails.date}
          </p>
          <p>
            <span>Address:</span> {volunteeringDetails.address}{" "}
          </p>
          <span>{volunteeringDetails.description}</span>
        </div>
      </div>
      <div className="volunteering-form">
        <h1>Sounds Good? Sign up here</h1>
        <SubmitButton onClick={() => handleSignUp()} value={"Sign up"} />
        <b>{feedback}</b>
      </div>
    </div>
  );
};

export default VolunteeringPage;
