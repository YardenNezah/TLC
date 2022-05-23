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
        <Link to="/associations" onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':'filterLink'}`}>All</Link>
        <Link to="/associations/new" onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':'filterLink'}`}>New</Link>
        <Link to="/associations/popular" onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':'filterLink'}`}>Most Popular</Link>
        <Link to="/associations/open" onClick={() => setFilter("open")} className={`${filter === "open" ? 'open':'filterLink'}`}>Open Now</Link>
      </div>
      <br /> 
      <AssociationsGrid filter={filter} />
    </div>
  );
};

export default AllAssociations;
