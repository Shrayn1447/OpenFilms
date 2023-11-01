'use client'
import React from 'react'
import { index } from './index'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ButtonNav from './ui/ButtonNav'
export default function Header() {
  return (
    <div className='flex lg:justify-evenly justify-around z-50 items-center fixed top-[0px]  mb-[40px] w-[100%] bg-black/20 backdrop-blur-sm h-[80px]  md:h-[100px]'>
        <Link href="/"><h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Open</h1></Link>
            <ul className='lg:flex hidden '>
                {index.map((el)=> (
                          <ButtonNav el={el} key={el.idList}/>
                    )
                )}
            </ul>           
        <div className='flex transition-all'>
          <button className='border rounded-[20px] hidden lg:block p-[10px_20px] hover:bg-red-700 transition-all'>
                Войти
          </button>
        </div>
       <MobileMenu/>
    </div>
  )
}
