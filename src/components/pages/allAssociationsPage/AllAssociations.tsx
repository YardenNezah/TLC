import Header from "../../header/Header";
import "./AllAssociations.scss";
import { useState } from "react";
import Footer from "../../footer/Footer";
import AssociationsGrid from "./AssociationsGrid";
import React from "react";
import { Link } from "react-router-dom";

const AllAssociations: React.FC = () => {
  const [filter, setFilter] = useState("all");
  console.log(filter)
  return (
    <div className="page-container">
      <Header />
      <h2>Associations</h2>
      <div className="categories-div">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':'filterLink'}`}>All</button>
        <button onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':'filterLink'}`}>New</button>        
        <button onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':'filterLink'}`}>Most Popular</button>
      </div>
      <br /> 
      <AssociationsGrid filter={filter} />
    </div>
  );
};

export default AllAssociations;
