import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllAssociations.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { fetchNewAssociations } from "../../../store/newAssociationsSlice";
import { fetchPopularAssociations } from "../../../store/popularAssociationsSlice";
import { fetchOpenAssociations } from "../../../store/openAssociationsSlice";

const AssociationsGrid = ({ filter }: any) => {
  const dispatch = useAppDispatch();
  const { associations } = useSelector((state: any) => state.associations);

  useEffect(() => {
    dispatch(fetchAssociations());
    dispatch(fetchNewAssociations());
    dispatch(fetchPopularAssociations());
    dispatch(fetchOpenAssociations());
  }, []);
  const passFilter = (item: any) => {
    switch (filter) {
      case "all":
        return true;
      case "new":
        if (item.isNewAssociation) return true;
        else return false;
      case "popular":
        if (item.isPopular) return true;
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
      {associations.map((item: any) => {
        if (passFilter(item))
          return (
            <Link
              to={`/associations/${item.name}`}
              className="to-association-btn"
              key={item._id}
            >
              <BeigeCard
                key={item.name}
                title={item.name}
                detail={""}
                img={item.mobileImage}
              ></BeigeCard>
            </Link>
          );
      })}
    </div>
  );
};
export default AssociationsGrid;
