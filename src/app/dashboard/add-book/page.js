"use client";
import React, { useState, useEffect } from "react";
import DashboardCard from "@/components/DashboardCard";
import {toast} from "react-hot-toast";
const MyProgress = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [rent, setRent] = useState("");

  const addBook = async (event) => {
    const data = {
      title: title,
      author: author,
      category: category,
      qty: qty,
      rent: rent,
    };

    const req = await fetch("http://localhost:3000/api/books/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await req.json();
    console.log(result);

    if (result.type == "success") {
      toast.success("Book added successfully");
    } else {
      toast.error("Error while getting the summary. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">

      <h1 className="my-5 font-bold text-4xl">Add New Book</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Book Title:</span>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>


      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Book Author:</span>
        </div>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>


      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Book Category:</span>
        </div>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Book Qty:</span>
        </div>
        <input
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Book Rent:</span>
        </div>
        <input
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <button onClick={addBook} className="my-5 btn btn-primary">Add Book</button>
    </div>
  );
};

export default MyProgress;
