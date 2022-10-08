import React from "react";
import { Detailpasangan, Jumbotron, Navbar } from "../../Components";
import Attending from "../../Components/Attending/Attending";
import Detail from "../../Components/Detail/Detail";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Detail />
      <Detailpasangan />
      <Attending />
    </div>
  );
};

export default Dashboard;
