import React from "react";

import { SingleRoomData } from "../../../Data/Data";

import DashboardCard from "./DashboardCard";
const SingleHostelCard = () => {
  return (
    <div className="Cards">
      {SingleRoomData.map((card, id) => {
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

export default SingleHostelCard;
