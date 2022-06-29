import React from 'react'
import DashboardCards from '../Cards/DashboardCards'
import BasicTable from '../Table/Table'
import './ApplicantsDashboard.css'
const ApplicantDashboard = () => {
  return (
    <div className='ApplicantDashboard'>
<h1>Applicant DashBoard</h1>
<DashboardCards />
<BasicTable />

    </div>
  )
}

export default ApplicantDashboard