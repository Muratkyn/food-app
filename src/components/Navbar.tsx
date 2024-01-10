import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'

import CartIcon from './CartIcon'

const Navbar = () => {

  const user = false
  return (
    <div className='h-12 text-red-500 uppercase p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-24 lg:px-20'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>

      </div>
      <div className='text-xl cursor-pointer md:font-bold md:text-center flex-1'>
        <Link href={'/'} >La Mia Pizza</Link>

      </div>

      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md '>
          <Image src='/phone.png' alt='' width={20} height={20}></Image>
          <span>322 612 22 22</span>
        </div>
        <Link href='/orders'>Orders</Link>
      {!user ? (
        <Link href='/login'>Login</Link>
      ):(
        <Link href='/orders'>Menu</Link>
      )}
        <CartIcon />

      </div>
    </div>
  )
}

export default Navbar