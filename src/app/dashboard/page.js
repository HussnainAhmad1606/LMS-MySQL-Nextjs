import React from "react";
import DashboardCard from "@/components/DashboardCard";
const MyProgress = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/workoutcover.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-auto">
          <div>
            <h1 className="my-10 text-3xl font-bold text-center">Dashboard</h1>
            <div className="grid grid-flow-cols gap-10 lg:grid-flow-rows justify-center items-center">
              <DashboardCard title={"Today's Session"} number={"20 Mints"} />
              <DashboardCard title={"This Month"} number={"20 Hours"} />
              <DashboardCard title={"Total Workouts"} number={200} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
