"use client";

import Card from "@/app/components/Card";
import useCardsFilms from '@/app/api/useCardsFilms'


export default function Page() {
  const { data, error, isLoading } = useCardsFilms('cartoon');
  if (isLoading) {
    return (
      <div
      className="text-[100px] min-h-screen mt-[300px] w-full flex justify-center">
        Загрузка...
      </div>
    );
  }
  return (
    <ul className="grid md:mt-[200px] mt-[150px] grid-cols-1 justify-items-center min-h-screen lg:grid-cols-4 sm:grid-cols-2 gap-8">
      {data.map((el) => {
        return <Card el={el} key={el.id} />;
      })}
    </ul>
  );
};