import React from 'react'
import SingleHostel from './Hostel/SingleHostel';
import Sidebar from './SideBar/SideBar';
import RightSide from './RightSide/RightSide';
import Admins from './Admins/Admin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
  } from "react-router-dom";
  import './Dashboard.css'
const SingleDashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-glass">
          <Sidebar/>
        <SingleHostel/>
       
        <RightSide />



        </div>
    </div>
  )
}

export default SingleDashboard