import React from "react";
import { Detailpasangan, Jumbotron, Navbar } from "../../Components";
import Attending from "../../Components/Attending/Attending";
import Detail from "../../Components/Detail/Detail";
import Surah from "../../Components/Surah/Surah";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Surah />
      <Detail />
      <Detailpasangan />
      <Attending />
    </div>
  );
};

export default Dashboard;
