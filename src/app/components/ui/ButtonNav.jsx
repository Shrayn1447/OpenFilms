'use client'
import Link from "next/link";
const ButtonNav = ({ el }) => {
  return (
    <li className="pr-[50px]" >
    <Link
      className="hover:text-orange-400 text-[15px] lg:text-[20px] hover:font-bold transition-all"
      href={`${el.ref}`}
    >
      {el.text}
    </Link>
  </li>
  )
};
export default ButtonNav;
