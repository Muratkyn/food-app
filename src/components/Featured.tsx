import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (

        <div className='w-screen md:w-[40vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'>
          {/* IMAGE CONTAINER */}
          {item.img && <div key={item.id} className='relative flex-1 w-full h-full'>
            <Image 
            src={item.img} 
            alt='food' 
            fill 
            className="object-contain hover:rotate-[80deg] transition-all duration-500"></Image>
          </div>}
          {/* TEXT CONTAINER */}
          <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl'>{item.title}</h1>
            <p className='p-4'>{item.desc}</p>
            <span className='text-xl font-bold'>€{item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
          </div>

        </div>

        ) )}

      </div>
    </div>
  )
}

export default Featured