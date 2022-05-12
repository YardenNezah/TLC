import { Fragment } from "react";
import VolunteeringCard from "../../layout/card/VolunteeringCard";

const SignatureItem =({volunteering}:any) => {
    return (
      <Fragment>
        <div className="association-title">{volunteering.association}</div>
         <VolunteeringCard
          key={volunteering.name}
          title={volunteering.name}
          address={volunteering.address}
          date={volunteering.date}
        ></VolunteeringCard> 
      </Fragment>
    );
  };

  export default SignatureItem;