import Link from "next/link";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidDollarCircle } from "react-icons/bi";
const Card = (params) => {


  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{params.title}</h2>
         <div className="my-5 grid grid-cols-2 gap-5">
         <p className="flex items-center"><IoPersonSharp className="mx-2 text-3xl"/> {params.author}</p>
          <p className="flex items-center"><BiSolidDollarCircle className="mx-2 text-3xl"/> {params.rent} Rs./day</p>
          <p className="flex items-center"><BiSolidCategory className="mx-2 text-3xl"/> {params.category}</p>
         </div>
          
          <div className="card-actions justify-end">
            <Link href={`/books/${params.id}`} className="btn btn-primary">Show Book</Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
