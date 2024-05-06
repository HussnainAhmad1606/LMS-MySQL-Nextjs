"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useEffect } from "react";
import Card from "@/components/Card";
import Trr from "@/components/Trr";
const Book = ({ params }) => {
  const { bookId } = params;
  const [email, SetEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [borrowers, setBorrowers] = useState([]);
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    toast.success("Book borrowed");
      
    }
    else {
      toast.error(result.message)
    }
  }

  const showBorrowerslist = async() =>{
    const data = {
      bookId: bookId
    };
    console.log(data);

    const req = await fetch("http://localhost:3000/api/books/show-borrower-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await req.json();
    console.log(result);

    if (result.type == "success") {
      setBorrowers(result.response);
    }
    setIsLoading(false);

  }
  const getBook = async (event) => {
    setIsLoading(true);
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
    showBorrowerslist();
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



    <div>
      <h1 className="my-10 text-center text-4xl font-bold">Borrower List</h1>

     {
      isLoading==false&&borrowers.length==0?(
        <h1 className="my-10 font-bold text-3xl text-center">No Borrowers Found</h1>

      ):(
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Student Name</th>
              <th>Student Roll No</th>
              <th>Librarian</th>
              <th>Issued on</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              borrowers.map((borrower, index)=> {
                return (
                  <Trr key={index} srNo={index+1} studentName={borrower.studentName} librarian={borrower.librarian} rollNo={borrower.studentId} borrowDate={borrower.borrowDate}/>
                )
              })
            }
           
          </tbody>
        </table>
      </div>
      )
     }


     
    </div>
    </div>
  );
};

export default Book;
