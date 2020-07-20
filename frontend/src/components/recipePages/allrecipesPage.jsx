import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TableRec from "../RecipeTable/TableRec";
import Sidnav from "../sideNav/Sidenav";
import BreadCrumbs from "..//Breadcrumb/breadcrumb.jsx";

const AllRecipes = () => {
  return (
    <div>
      <div>
        <Sidnav></Sidnav>
      </div>
      <div className="main">
        <BreadCrumbs />

        <div className="container-fluid">
          <TableRec />
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
