'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
const Card = ({ el }) => {
  const router = useRouter()
  return (
    <li className=" cursor-pointer  ease-in-out relative  transition-all hover:-translate-y-1 hover:scale-[1.02] hover:z-10 rounded-2xl" 
      onClick={() => router.push(`/Film/MoviDetails?movi=${el.id}`,{ scroll: false })}
      >
        <div className="flex justify-center">
        <Image
        src={`${el.poster.url}`}
        className=" rounded-xl w-[300px] h-[450px]"
        height={720}
        width={1024}
        alt={`${el.name}`}      
          />
        </div>
         <div className="">
         <h1 className="text-[20px] mt-[10px] w-[250px]">{el.name}</h1>
          <div className="flex">
            <p className=" font-bold text-orange-400">{el?.year}</p>
            <p className="pl-[10px]">{el?.genres[0]?.name[0].toUpperCase() + el?.genres[0]?.name.slice(1)}</p>
          </div>
         </div>
    </li>
  );
};
export default Card;
