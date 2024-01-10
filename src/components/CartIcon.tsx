import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
        <div className='relative h-8 w-8 md:w-5 md:h-5'>
        <Image src='/cart.png' alt="" fill sizes='' ></Image>
        </div>
        <span>Cart (8)</span>
    </Link>
  )
}

export default CartIcon