import React from 'react'
import Link from 'next/link'
import Menu from './Menu'

import CartIcon from './CartIcon'

const Navbar = () => {

  const user = false
  return (
    <div className='h-12 text-red-500 uppercase p-4 flex justify-between items-center border-b-2 border-b-red-500'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4'>
        <Link href='/home'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>

      </div>
      <div className='text-xl cursor-pointer'>
        <Link href={'/'} >La Mia Pizza</Link>

      </div>

      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      {!user ? (
        <Link href='/login'>Login</Link>
      ):(
        <Link href='/orders'>Menu</Link>
      )}
      <div className='hidden md:flex gap-4'>
        <CartIcon />

      </div>
    </div>
  )
}

export default Navbar