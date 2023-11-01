import React from 'react'
import Image from 'next/image'
const CardFilm = ({data}) => {
  return (
    <div className=" relative w-[350px] h-[520px]">
          <Image
            src={data.poster}
            width={350}
            height={520}
            className=" rounded-lg drop-shadow-lg"
            alt={data.name}
          />
          <div className=" absolute w-full h-full top-0 rounded-xl">
            <h1>{data.genres}</h1>
          </div>
    </div>
  )
}

export default CardFilm