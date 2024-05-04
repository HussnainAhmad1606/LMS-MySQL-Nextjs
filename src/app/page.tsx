import Image from "next/image";
import Link from "next/link";
import { SiSimpleanalytics } from "react-icons/si";
import { BsClipboard2Data } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1607193634806-5c28805731aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-auto lg:w-1/2">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Welcome to UET LMS
            </h1>
            <p className="mb-5">
              Fit Trek is a comprehensive fitness hub where you can explore
              various workout possibilities, from personalized routines to the
              latest gym trends. It offers tools to track your progress,
              discover new exercises, and connect with a supportive community.
              Whether you're a beginner or an experienced fitness enthusiast,
              Fit Trek is here to help you reach your health and wellness goals.
            </p>
            <Link href={"/books"}>
              <button className="btn btn-primary">Explore Books</button>
            </Link>
          </div>
        </div>
      </div>

    

    
    </>
  );
}
