'use client'
import React from 'react'
import { index } from './index'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import clsx from 'clsx'
import ButtonNav from './ui/ButtonNav'
export const Header = () => {
  const [isMenu, setMenu] = useState(false)
  return (
    <div className='flex lg:justify-evenly justify-around z-50 items-center fixed top-[0px]  mb-[40px] w-[100%] bg-black/20 backdrop-blur-sm h-[80px]  md:h-[100px]'>
        <Link href="/"><h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Open</h1></Link>
        <nav>
            <ul className='lg:flex hidden '>
                {index.map((el)=> {
                    return (
                       <ButtonNav el={el}/>
                    )
                })}
            </ul>           
        </nav>
        <div className='flex transition-all'>
          <button className='border rounded-[20px] hidden lg:block p-[10px_20px] hover:bg-red-700 transition-all'>
                Войти
          </button>
        </div>
        <div className='block lg:hidden'>
          <button onClick={() => {setMenu((n) => !n)}}>
           {isMenu ?  <AiOutlineClose size={40}/> :  <RxHamburgerMenu size={40}/>}
          </button>
        </div>
        <div className={clsx('absolute lg:hidden top-[100px] right-0 transition-all ease-in', {
          'w-[400px] h-[500px]  bg-black/80 backdrop-blur-sm rounded-xl' : isMenu
        })}>
            <ul className={clsx('flex flex-col text-[40px] font-bold leading-[90px] text-center justify-center w-full h-full', {
              'hidden' : !isMenu
            })}>
                {index.map((el)=> {
                    return (
                       <li className='pr-[50px]' key={el.id}><Link className='hover:text-orange-400 transition-all' href={`${el.ref}`}>{el.text}</Link></li>
                    )
                })}
            </ul>           
        </div>
    </div>
  )
}
