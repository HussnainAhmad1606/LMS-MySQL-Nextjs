import React from "react";
import DashboardCard from "@/components/DashboardCard";
const MyProgress = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1549383028-df014fa3a325?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-auto">
          <div>
            <h1 className="my-10 text-3xl font-bold text-center">Dashboard</h1>
            <div className="grid grid-cols-3 gap-10">
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
