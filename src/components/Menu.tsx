"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import CartIcon from './CartIcon'

const links = [
    {id:1, title:"Home", url: "/"},
    {id:2, title:"Menu", url: "/menu"},
    {id:3, title:"Working Hours", url: "/"},
    {id:4, title:"Contact", url: "/"},

]

const Menu = () => {

    const [open, setOpen] = useState(false)
    const user = false

  return (
    <div>
        {!open ? (
        <Image 
        src='/open.png' 
        alt='menubar' 
        width={20} 
        height={20} 
        onClick={()=> setOpen(true)}></Image>
        ):(
        <Image 
        src='/close.png' 
        alt='menubar' 
        width={20} 
        height={20} 
        onClick={() => setOpen(false)}></Image>
        )
    }
        {open && (<div className='bg-red-500 text-white absolute left-0 top-24 flex flex-col gap-8 items-center justify-center w-full h-[calc(100vh-6rem)] text-3xl z-10' >
            {links.map((item, id) => (
                <Link href={item.url} key={item.id} onClick={()=> setOpen(false)} >{item.title}</Link>
            ))}

            {!user ? (
                <Link href='/login' onClick={()=> setOpen(false)}>Login</Link>
            ) :(
                <Link href='/orders' onClick={()=> setOpen(false)}>Orders</Link>
            )}
            <Link href='/cart' onClick={()=> setOpen(false)}>
            <CartIcon />
            </Link>
        </div>)}
    </div>
  )
}

export default Menu