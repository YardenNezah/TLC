/* eslint-disable react-hooks/exhaustive-deps */
import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import {  useEffect } from "react";
import { fetchFounders } from "../../../store/founderDataSlice";
import "./AllFounders.scss";

const FoundersGrid = () => {

  const dispatch = useAppDispatch();
  const { founders } = useSelector((state: any) => state.founders);

  useEffect(() => {
    dispatch(fetchFounders());
  }, []);

  return (
      <div className="associations-grid founders-grid">
        {founders.map((item: any) => (
          <Link to={`/founder/${item.founderName}`} className="to-founder-btn" key={item._id}>
            <BeigeCard
              key={item.founderName}
              title={item.founderName}
              detail={""}
              img={item.founderImage}
            ></BeigeCard>
          </Link>
        ))}
      </div>
  );
};

export default FoundersGrid;
