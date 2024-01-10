import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item)=> (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONT */}
          {item.img && (
            <div className='relative h-[80%]'>
            <Image src={item.img} alt='pizza' fill className='object-contain'></Image>

          </div>
          )}
          <div className='flex flex-row justify-between font-bold text-xl md:text-lg'>
            <h1 className='text-2xl sm:text-xl uppercase p-2'>{item.title}</h1>
            <h2 className='p-2 group-hover:hidden'>{item.price}</h2>
            <button className=' bg-red-500 rounded-md text-white p-2 md:text-sm sm:text-xl group-hover:block hidden'>Add to Cart</button>
          </div>
          
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage