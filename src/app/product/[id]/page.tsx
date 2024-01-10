
import React from 'react';
import Image from 'next/image';
import { singleProduct } from '@/data';
import Price from '@/components/Price';

const SingleProduct = () => {

  
  return (
    <div className='p-4 lg:px-20 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      {/* IMAGE CONT */}
      {singleProduct.img &&
      <div className='relative w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt='image' className="object-contain" fill></Image>
      </div>
      }
      {/* TEXT CONT */}
      <div className='flex flex-col gap-4 h-1/2 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl uppercase font-bold'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>

    </div>
  )
}

export default SingleProduct