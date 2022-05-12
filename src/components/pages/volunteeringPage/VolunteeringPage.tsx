import "./VolunteeringPage.scss";
import Input from "../../layout/form/Input";
import line from "../../../assets/line-7-copy-2.png";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import SubmitButton from "../../layout/button/SubmitButton";
import { fetchVolunteering } from "../../../store/volunteeringDataSlice";

const VolunteeringPage = (props: { volunteering: string }) => {
  const dispatch = useAppDispatch();
  const { volunteering } = useSelector((state: any) => state.volunteering);

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


  return (
    <div className="volunteering">
      <div className="volunteering-details">
        <div className="data-content">
          <h3 className="volunteering-title">{props.volunteering}</h3>
          <br></br>
          <h2>Date: {volunteeringDetails.date}</h2>
          <h2>Address: {volunteeringDetails.address} </h2>
        </div>
      </div>
      <h1>Sounds Good?</h1>
      <h2>Fill in your details here</h2>
      {inputsContainer("Your Name")}
      <Input
        content={""}
        type={"text"}
        placeholder={""}
        onChange={(e: any) => {}}
        value={""}
        minLength={1}
        maxLength={10}
        key={1}
      />
      {inputsContainer("Your Phone Number")}
      <Input
        content={""}
        type={"text"}
        placeholder={""}
        onChange={(e: any) => {}}
        value={""}
        minLength={1}
        maxLength={10}
        key={2}
      />
      <p>Confirmation SMS will be sent</p>
      <SubmitButton onClick={(e: any) => {}} />
    </div>
  );
};

export default VolunteeringPage;
