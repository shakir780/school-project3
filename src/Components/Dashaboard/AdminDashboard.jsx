import React from 'react'
import ApplicantDashboard from './ApplicantDashBoard/ApplicantDashboard'
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
const AdminDashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-glass">
          <Sidebar/>
        <Admins />
       
        <RightSide />


{/* <RightSide /> */}
        </div>
    </div>
  )
}

export default AdminDashboard