"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useEffect } from "react";
import Card from "@/components/Card"
const Login = () => {
  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("title");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {setIsLogin, setAvatar, setEmail, setUsername} = useUserStore();
  const getBooks = async(event) => {
      setIsLoading(true);
    const data = {
        query: query,
        filterBy: filterBy
    }

    console.log(data)
    
    const req = await fetch("http://localhost:3000/api/books/filter-books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    
    const result = await req.json();
    console.log(result);
    
    if (result.type == "success"){
      setBooks(result.response)
      setIsLoading(false);
      
    }
    else {
        setBooks([])
    }
    setIsLoading(false);
  
  };

  useEffect(() => {
  
  }, [])
  

  return (
    <div style={{
      minHeight: "80vh"
    }}>
      <h1 className="text-center font-bold text-4xl my-10">Available Books</h1>
      <div className="flex justify-center items-center">
      <div className="join">
  <div>
    <div>
      <input value={query} onChange={e=>setQuery(e.target.value)} className="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <select onChange={e=>setFilterBy(e.target.value)} value={filterBy} className="select select-bordered join-item">
    <option value={"title"}>Title</option>
    <option value={"author"}>Author</option>
    <option value={"category"}>Category</option>
  </select>
  <div className="indicator">
    <button onClick={getBooks} className="btn join-item">Search</button>
  </div>
</div>
      </div>

{
    isLoading==false&&books.length==0?(
        <h1 className="text-center my-10">No books found</h1>

    ):null
}
      {
        isLoading?(
          <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
            </div>
        ):null
      }
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
