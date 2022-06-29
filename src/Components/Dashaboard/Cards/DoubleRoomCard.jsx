import React from "react";

import { DoubleRoomData } from "../../../Data/Data";

import DashboardCard from "./DashboardCard";
const DoubleHostelCard = () => {
  return (
    <div className="Cards">
      {DoubleRoomData.map((card, id) => {
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

export default DoubleHostelCard;
