import React from 'react'
import ApplicantDashboard from './ApplicantDashBoard/ApplicantDashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
  } from "react-router-dom";
  import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-glass">
        <ApplicantDashboard />


{/* <RightSide /> */}
        </div>
    </div>
  )
}

export default Dashboard