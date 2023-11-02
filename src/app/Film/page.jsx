"use client";
import { fetcher } from "../api/fetcher";
import useSWR from "swr";
import Card from "../components/Card";


export default function Page() {
  const { data, error, isLoading } = useSWR(
    `https://api.kinopoisk.dev/v1.3/movie?page=9&limit=20`,
    fetcher
  );
  const movi = data?.docs;
  if (isLoading) {
    return (
      <div
      className="text-[100px] min-h-screen mt-[300px] w-full flex justify-center">
        Загрузка...
      </div>
    );
  }
  return (
    <ul className="grid md:mt-[150px] mt-[100px] grid-cols-1 justify-items-center min-h-screen lg:grid-cols-4 sm:grid-cols-2 gap-8">
      {movi?.map((el) => {
        return <Card el={el} key={el.id} />;
      })}
    </ul>
  );
};