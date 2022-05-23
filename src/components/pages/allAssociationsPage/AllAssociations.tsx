import Header from "../../header/Header";
import "./AllAssociations.scss";
import { useState } from "react";
import Footer from "../../footer/Footer";
import AssociationsGrid from "./AssociationsGrid";
import React from "react";
import { Link } from "react-router-dom";

const AllAssociations: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="page-container">
      <Header />
      <h2>Associations</h2>
      <div className="categories-div">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("new")}>New</button>        
        <button onClick={() => setFilter("popular")}>Most Popular</button>
        <button onClick={() => setFilter("open")}>Open Now</button>
      </div>
      <br /> 
      <AssociationsGrid filter={filter} />
    </div>
  );
};

export default AllAssociations;
