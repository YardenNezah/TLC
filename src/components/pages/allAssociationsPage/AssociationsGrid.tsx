import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllAssociations.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchAssociations } from "../../../store/AssociationDataSlice";
import { fetchNewAssociations } from "../../../store/newAssociationsSlice";
import { fetchPopularAssociations } from "../../../store/popularAssociationsSlice";
import { fetchOpenAssociations} from "../../../store/openAssociationsSlice";

const AssociationsGrid = ({ filter }: any) => {

  const dispatch = useAppDispatch();
  const { associations } = useSelector((state: any) => state.associations);

  useEffect(() => {
    dispatch(fetchAssociations());
    dispatch(fetchNewAssociations());
    dispatch(fetchPopularAssociations());
    dispatch(fetchOpenAssociations());
  }, []);

  return (
          <div className="associations-grid">
            {associations.map((item: any) => (
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
            ))}
          </div>
  );
};
export default AssociationsGrid;
