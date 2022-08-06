/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../../header/Header";
import "./AllAssociations.scss";
import { useState } from "react";
import AssociationsGrid from "./AssociationsGrid";
import React from "react";

const AllAssociations: React.FC = () => {
  const [filter, setFilter] = useState("all");
  console.log(filter)
  return (
    <div className="page-container all-volunteeering-container">
      <Header />
      <h2>Associations</h2>
      <AssociationsGrid filter={filter} />
    </div>
  );
};

export default AllAssociations;
