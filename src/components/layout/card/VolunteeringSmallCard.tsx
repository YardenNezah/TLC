import React from "react";
import './Card.scss';

const VolunteeringSmallCard: React.FC<{
  title: string;
  detail: string;
  date: string,
  address: string;
}> = (props) => {
  return (
    <div className="data-small-item">
      <div className="data-small-content">
        <h3 className="volunteering-small-title">{props.title}</h3>
        <p className="volunteering-small-description">{props.detail}</p>
        <p>{props.address}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default VolunteeringSmallCard;
