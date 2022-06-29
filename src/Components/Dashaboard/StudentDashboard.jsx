import React from 'react'
import Student from './Students/Students';
import Sidebar from './SideBar/SideBar';
import RightSide from './RightSide/RightSide';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
  } from "react-router-dom";
  import './Dashboard.css'
const StudentDashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-glass">
          <Sidebar/>
       <Student/>
       
        <RightSide />



        </div>
    </div>
  )
}

export default StudentDashboard