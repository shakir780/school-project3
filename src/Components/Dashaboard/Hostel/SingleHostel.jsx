import React from 'react'
import SingleHostelCard from '../Cards/SingleHostelCard';
import SingleHostelTable from '../Table/SingleHostelTable';

const SingleHostel = () => {
  return (
   
        <div className="ApplicantDashboard">
          <h1>Single Dashboard</h1>
          <SingleHostelCard />
         <SingleHostelTable />
        </div>
      );
    }; 



export default SingleHostel