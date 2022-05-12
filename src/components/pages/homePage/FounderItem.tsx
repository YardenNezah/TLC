import "./HomePage.scss";
import { Link } from "react-router-dom";

const FounderItem = ({ founder }:any) => {
  return (
    <div className="founder-associations-container">
      {founder.map((founderDetails:any) => {
          return (
              <Link to={`/founder/${founderDetails.founderName}`} className="founder-img">
                <img
                  src={founderDetails.founderImage}
                  alt="founder"
                  className="founder-img"
                ></img>
                <h1>{founderDetails.founderName}</h1>
              </Link>
          );
      })}
    </div>
  );
};

export default FounderItem;
