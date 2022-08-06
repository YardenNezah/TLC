import React from "react";
import './Card.scss';

const VolunteeringCard: React.FC<{
  title: string;
  address: string;
  date: any;
  key: string; 
}> = (props) => {
  return (
        <div className="data-item">
        <div className="data-content">
          <span className="volunteering-card-title">{props.title}</span><br/>
          <span className="volunteer-card-address">{props.address}</span> <br/>
          <span className="volunteer-card-date">{props.date}</span>
        </div>
      </div>
  );
};

export default VolunteeringCard;
