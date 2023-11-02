"use client";
import { fetcher } from "../app/api/fetcher";
import useSWR from "swr";
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
    return (
      <div className="w-full h-screen flex justify-center items-center">
      <Link href='/Film'
        className="text-[50px] border p-[10px] rounded-2xl hover:bg-slate-950">
          Вход
      </Link>
      </div>
    )
};
