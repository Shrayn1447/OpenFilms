"use client";
import { index } from "./index";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import clsx from "clsx";
const MobileMenu = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <div className="block md:hidden">
        <button
          onClick={() => {
            setMenu((n) => !n);
          }}
        >
          {isMenu ? (
            <AiOutlineClose size={40} />
          ) : (
            <RxHamburgerMenu size={40} />
          )}
        </button>
      </div>
      <div
        className={clsx(
          "absolute lg:hidden top-[100px] right-0 transition-all ease-in",
          {
            "w-[400px] h-[500px]  bg-black/80 backdrop-blur-sm rounded-xl":
              isMenu,
          }
        )}
      >
        <ul
          className={clsx(
            "flex flex-col text-[40px] font-bold leading-[90px] text-center justify-center w-full h-full",
            {
              hidden: !isMenu,
            }
          )}
        >
          {index.map((el) => {
            return (
              <li className="pr-[50px]" key={el.idList}>
                <Link
                  className="hover:text-orange-400 transition-all"
                  href={`${el.ref}`}
                >
                  {el.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
