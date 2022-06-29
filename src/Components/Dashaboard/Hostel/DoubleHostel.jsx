import React from 'react'
import DoubleHostelCard from '../Cards/DoubleRoomCard';
import DoubleHostelTable from '../Table/DoubleHostelTable';

const DoubleHostel = () => {
  return (
   
        <div className="ApplicantDashboard">
          <h1>Double Hostel Dashboard</h1>
          <DoubleHostelCard />
         <DoubleHostelTable />
        </div>
      );
    }; 



export default DoubleHostel