import React from 'react'
import Link from 'next/link'
import { menu } from '@/data'


const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 h-[calc(100vh-6rem)] md-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
        {menu.map(product => (
            <Link 
            href={`/menu/${product.slug}`}
            key={product.id}
            className='w-full h-1/3 bg-cover p-8 md:h-1/2'
            style={{backgroundImage:`url(${product.img})`}}
            >
                <div className={`text-${product.color} w-1/2`}>
                    <h1 className='uppercase text-bold text-3xl'>{product.title}</h1>
                    <p className='text-sm my-8'>{product.desc}</p>
                    <button className="hidden xl:block bg-black text-white px-4 py-2 rounded-md">Explore</button>
                </div>

            </Link>
        ))}
    </div>
  )
}

export default MenuPage