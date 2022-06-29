import React from "react";
import DoubleHostel from "./Hostel/DoubleHostel";
import Sidebar from "./SideBar/SideBar";
import RightSide from "./RightSide/RightSide";
import Admins from "./Admins/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./Dashboard.css";
const DoubleDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-glass">
        <Sidebar />
        <DoubleHostel />

        <RightSide />
      </div>
    </div>
  );
};

export default DoubleDashboard;
