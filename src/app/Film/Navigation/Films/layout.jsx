import React from 'react'

const layout = ({children}) => {
  return (
    <div className='container mx-auto'>
        <div className='w-[100%] md:top-[120px] text-center md:text-left top-[100px] text-[30px] font-medium absolute'>
            Мультфильмы
        </div>
        {children}
    </div>
  )
}

export default layout