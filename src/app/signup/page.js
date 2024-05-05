"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(event) => {
    console.log("Submitting")
    const data = {
      username: username,
      password: password,
  
    }
   
    const req = await fetch("/api/auth/signup",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await req.json();
    const res = JSON.parse(result.data)
    console.log(result, res)
    if (res.message){
      toast.error(res.message)
    }
    else {
      toast.success("account creation Success")
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user"
                  className="input input-bordered"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <p className="text-sm mt-4">
                  Already have an account?{" "}
                  <a href="/login" className="link link-hover">
                    Login here!
                  </a>
                </p>
                <p className="text-sm">
                  <a href="#" className="link link-hover">
                    Forgot Password?
                  </a>
                </p>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
