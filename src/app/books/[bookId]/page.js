"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useEffect } from "react";
import Card from "@/components/Card"
const Book = ({params}) => {
    const {bookId} = params;
  const [email, SetEmail] = useState("");
  const [book, setBook] = useState({});
  const {setIsLogin, setAvatar, setEmail, setUsername} = useUserStore();
  const getBook = async(event) => {
    const data = {
        bookId: bookId
    }
    console.log(data)
   
    const req = await fetch("http://localhost:3000/api/books/get-single-book", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await req.json();
    console.log(result);

    if (result.type == "success"){
      setBook(result.response[0])
     
    }
  
  };

  useEffect(() => {
    getBook();
  }, [])
  

  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">Available Book: {book?.title}</h1>
      <div
        className="grid grid-cols-3 gap-10 my-10"
       
      >
        
       
      </div>
    </div>
  );
};

export default Book;
