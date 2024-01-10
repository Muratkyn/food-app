"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const slides =[ 
  {
    id:1,
    title: "The Best Pizzeria in Milan!",
    image: '/slide1.png'
  },
  {
    id:2,
    title: "Fresh, Tasty and Hot Burgers!",
    image: '/slide2.png'
  },
  {
    id:3,
    title: "Home delivery in Milan wherever you are!",
    image: '/slide3.jpg'
  }
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length-1 ? 0 : prev+1 ))
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row'>
      {/* TEXT CONTAINER */}
      <div className='flex flex-1 flex-col gap-8 items-center justify-center font-bold text-red-500 bg-fuchsia-50'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl'>
          {slides[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg '>Order Now!</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full flex-1 relative'>
        <Image src={slides[currentSlide].image} alt='banner' fill className='object-cover'></Image>
      </div>


    </div>
  )
}

export default Slider