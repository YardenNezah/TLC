/* eslint-disable array-callback-return */
import BeigeCard from "../../layout/card/BeigeCard";
import "./AllAssociations.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AssociationsGrid = ({ filter }: any) => {

  const [associations, setAssociations] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/auth/getByRole/association")
      setAssociations(res.data.result)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  const passFilter = (item: any) => {
    switch (filter) {
      case "all":
        return true;
      case "new":
        if (item.associationDetails.isNewAssociation) return true;
        else return false;
      case "popular":
        if (item.associationDetails.isPopular) return true;
        else return false;
      case "open":
        const opening = item.openingHour.split(":")[0] * 1;
        const closing = item.closingHour.split(":")[0] * 1;
        const date = new Date();
        const now = date.getHours();
        if (now >= opening && now <= closing) return true;
        else return false;
      default:
        return true;
    }
  };
  return (
    <div className="associations-grid">
      {associations && associations.map((item: any, index: any) => {
        if (passFilter(item))
          return (
            <Link
              to={`/associations/${item.name}`}
              className="to-association-btn"
              key={index}
            >
              <BeigeCard
                key={item.name}
                title={item.name}
                detail={""}
                img={item.associationDetails.image}
              ></BeigeCard>
            </Link>
          );
      })}
    </div>
  );
};
export default AssociationsGrid;
