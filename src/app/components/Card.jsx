'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
const Card = ({ el }) => {
  const router = useRouter()
  return (
      <li className=" cursor-pointer  ease-in-out relative  justify-self-center transition-all hover:-translate-y-1 hover:scale-[1.02] hover:z-10 rounded-2xl" 
      onClick={() => router.push(`/MoviDetails?movi=${el.id}`,{ scroll: true })}
      key={el.externalId.kpHD}>
        <Image
        src={`${el.poster.url}`}
        width={400}
        height={200}
        className=" rounded-xl"
        alt={`${el.name}`}      
          />
          <h1 className="text-[20px] mt-[10px]">{el.name}</h1>
          <div className="flex">
            <p className=" font-bold text-orange-400">{el?.year}</p>
            <p className="pl-[10px]">{el?.genres[0]?.name[0].toUpperCase() + el?.genres[0]?.name.slice(1)}</p>
          </div>
    </li>
  );
};
export default Card;
