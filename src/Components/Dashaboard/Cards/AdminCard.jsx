import React from "react";
import "./DashboardCards.css"
import { AdminsData } from "../../../Data/Data";

import DashboardCard from "./DashboardCard";
const DashboardCards = () => {
  return (
    <div className="Cards">
      {AdminsData.map((card, id) => {
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
  );
};

export default DashboardCards;
