import React from "react";
import BeigeCard from "./BeigeCard";
import "./Card.scss";

const FounderCard: React.FC<{
  img: string;
  title: string;
  detail: string;
  associationImg: string;
  associationName: string;
}> = (props) => {
  return (
        <BeigeCard
          img={props.associationImg}
          title={props.associationName}
          detail={""}
        ></BeigeCard>
  );
};

export default FounderCard;
