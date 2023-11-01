import React from 'react'
import Link from 'next/link'
const ButtonNav = ({children,el}) => {
  return (
    <li className='pr-[50px]' key={el.id}><Link className='hover:text-orange-400 hover:font-bold transition-all' href={`${el.ref}`}>{el.text}</Link></li>
  )
}

export default ButtonNav