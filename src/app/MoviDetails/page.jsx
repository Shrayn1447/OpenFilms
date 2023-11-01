"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useInfoFilms } from "../api/useInfoFilm";
import CardFilm from "../components/CardFilm";
import VideoPlayer from "../components/VideoPlayer";
const MoviDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("movi");
  const { data, error, isLoading } = useInfoFilms(id);
  error && <>Ошибка</>;
  if (isLoading) {
    return (
      <div className="text-[100px] min-h-screen mt-[300px] w-full flex justify-center">
        Загрузка...
      </div>
    );
  }
  return (
    <div className="mt-32 flex flex-col items-center w-full ">
      <div className="flex sm:flex-row flex-col md:justify-around items-center w-full mb-[70px]">
         <CardFilm data={data}/>
        <div className="m-[20px]">
          <h1 className="text-4xl text-orange-500 font-bold">{data.name}</h1>
          <p className="md:w-[700px] w-auto text-[22px]">{data.description}</p>
        </div>
      </div>
      <VideoPlayer
        trailers={data.trailers}
        className="w-[400px] h-[480px] lg:w-[700px] rounded-3xl"/>
    </div>
  );
};
export default MoviDetails;
