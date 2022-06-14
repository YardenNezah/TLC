import { Fragment } from "react";
import VolunteeringCard from "../../layout/card/VolunteeringCard";

const SignatureItem =({volunteering}:any) => {
  function formatDate(Idate: any) {
    const date = new Date(Idate)
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${currentDate}`;
}

    return (
      <Fragment>
        <div className="association-title">{volunteering.association}</div>
         <VolunteeringCard
          key={volunteering.name}
          title={volunteering.name}
          address={volunteering.address}
          date={formatDate(volunteering.date)}
        ></VolunteeringCard> 
      </Fragment>
    );
  };

  export default SignatureItem;