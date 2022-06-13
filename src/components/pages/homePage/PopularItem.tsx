import { Link } from "react-router-dom";

const PopularItem = ({ association }: any) => {
  return (
    <Link
      to={`/associations/${association.name}`}
      className="to-association-btn"
    >
      <div className="data-item popular-item">
        <img
          src={association.associationDetails.image}
          alt="img"
          className="association-img"
          srcSet={`${association.associationDetails.image} 800w`}
        ></img>
        <div className="association-content">
          <h2 className="association-name">{association.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PopularItem;