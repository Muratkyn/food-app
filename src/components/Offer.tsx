"use client"

import React from 'react'
import Image from 'next/image'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-01-18")

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold'>Delicious burger & French fries</h1>
        <p className='text-white xl:text-xl' >
        IL GUSTO
        È ANCHE NEL PREZZO
        C'è qualcosa di meglio di un hamburger appena cotto sulla griglia? LA MIA ® vi farà risparmiare con coupon,
        EuroKing, King Offerta ® ...
        Così si raddoppia gusto e soddisfazione.
        </p>
        <Countdown className='text-5xl text-yellow-500' date={endingDate}/>
        <button className='bg-red-500 text-white rounded-md py-3 px-6' >Order now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='flex-1 w-full relative'>
        <Image src='/offerProduct.png' alt='offer' fill className='object-contain'></Image>
      </div>
    </div>
  )
}

export default Offer