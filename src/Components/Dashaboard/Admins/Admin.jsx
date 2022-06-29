import React from 'react'
import AdminCard from '../Cards/AdminCard';
import AdminTable from '../Table/AdminTable';

const Admin = () => {
  return (
   
        <div className="ApplicantDashboard">
          <h1>Admin Dashboard</h1>
          <AdminCard />
          <AdminTable/>
        </div>
      );
    }; 



export default Admin