import React from 'react'
import StudentCard from '../Cards/StudentCard';
import StudentTable from '../Table/StudentTable';

const Student = () => {
  return (
   
        <div className="ApplicantDashboard">
          <h1>Student Dashboard</h1>
          <StudentCard />
          <StudentTable/>
        </div>
      );
    }; 



export default Student