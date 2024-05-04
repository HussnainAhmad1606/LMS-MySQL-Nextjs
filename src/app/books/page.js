"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useEffect } from "react";
import Card from "@/components/Card"
const Login = () => {
  const [email, SetEmail] = useState("");
  const [books, setBooks] = useState([]);
  const {setIsLogin, setAvatar, setEmail, setUsername} = useUserStore();
  const getBooks = async(event) => {
   
    const req = await fetch("http://localhost:3000/api/books/get-books")

    const result = await req.json();
    console.log(result);

    if (result.type == "success"){
      setBooks(result.response)
     
    }
  
  };

  useEffect(() => {
    getBooks();
  }, [])
  

  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">Available Books</h1>
      <div
        className="grid grid-cols-3 gap-10 my-10"
       
      >
         {
          books.map((book,index)=> {
            return (
              <Card rent={book.rent_price_per_day} author={book.author} category={book.category} id={book.id} key={index} title={book.title}/>
            )

          })
         }
       
      </div>
    </div>
  );
};

export default Login;
