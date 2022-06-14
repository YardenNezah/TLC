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
      <AssociationsGrid filter={filter} />
    </div>
  );
};

export default AllAssociations;
