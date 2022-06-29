import React from 'react'
// import "./Cards.css";
import { StudentData } from '../../../Data/Data';
import DashboardCard from './DashboardCard';
const StudentCard = () => {
  return (
    <div className="Cards">
      {StudentData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <DashboardCard
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  )
}

export default StudentCard