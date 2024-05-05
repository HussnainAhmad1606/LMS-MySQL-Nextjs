"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useEffect } from "react";
import Card from "@/components/Card";
const Book = ({ params }) => {
  const { bookId } = params;
  const [email, SetEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [book, setBook] = useState({});
  const { setIsLogin, setAvatar, Username, setEmail, setUsername } = useUserStore();

  const borrowBook = async() =>{
    const data = {
      bookId: bookId,
      studentId: studentRollNo,
      studentName: studentName,
      librarian: Username
    };
    console.log(data);

    const req = await fetch("http://localhost:3000/api/books/borrow-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await req.json();
    console.log(result);

    if (result.type == "success") {
      setBook(result.response[0]);
    }
  }
  const getBook = async (event) => {
    const data = {
      bookId: bookId,
    };
    console.log(data);

    const req = await fetch("http://localhost:3000/api/books/get-single-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await req.json();
    console.log(result);

    if (result.type == "success") {
      setBook(result.response[0]);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">
        Book Info 
      </h1>
    <div className="flex justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Borrow Book</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Borrow: {book?.title}</h3>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Student Name:</span>
  </div>

  <input value={studentName} onChange={e=>setStudentName(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Student Roll No:</span>
  </div>

  <input value={studentRollNo} onChange={e=>setStudentRollNo(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>
<button className="my-5 btn btn-primary" onClick={borrowBook}>Borrow</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Book;
