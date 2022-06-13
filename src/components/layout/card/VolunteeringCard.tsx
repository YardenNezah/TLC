import React from "react";
import './Card.scss';

const VolunteeringCard: React.FC<{
  title: string;
  address: string;
  date: Date;
  key: string; 
}> = (props) => {
  return (
        <div className="data-item">
        <div className="data-content">
          <h4 className="volunteering-title">{props.title}</h4>
          <p>{props.address}</p>
          <p>{props.date}</p>
        </div>
      </div>
  );
};

export default VolunteeringCard;
