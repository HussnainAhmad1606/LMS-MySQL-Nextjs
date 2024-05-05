"use client"
import React, {useState, useEffect} from "react";
import DashboardCard from "@/components/DashboardCard";
import Link from "next/link";
const MyProgress = () => {

  const [borrowed, setBorrowed] = useState(0);
  const [total, setTotal] = useState(0);

  const getSummary = async(event) => {
  
    const req = await fetch("http://localhost:3000/api/books/total-summary")

    const result = await req.json();
    console.log(result);

    if (result.type == "success"){
      setBorrowed(result.borrowed.borrowed)
      setTotal(result.total.total)
      
    }
    else {
      toast.error("Error while getting the summary. Please try again.")
    }
  };
  

  useEffect(() => {
    getSummary();
  }, [])
  
  return (
    <>
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
            <div className="grid grid-cols-2 gap-10">
              <DashboardCard title={"Borrowed Books"} number={borrowed} />
              <DashboardCard title={"Total Books"} number={total} />
            </div>
          </div>
          
        </div>
      </div>
    </div>


    <div>
      <h1 className="text-4xl my-10 text-center font-bold">Actions</h1>

      <div className="flex justify-center items-center">


      <Link className="my-10 btn btn-primary" href={"/dashboard/add-book"}>Add Book</Link>
      </div>
    </div>
      </>
  );
};

export default MyProgress;
