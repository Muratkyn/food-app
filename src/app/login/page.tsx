import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
        {/* IMAGE CONT */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src='/loginBG.png' alt='login' fill className='object-cover'></Image>

        </div>
        {/* FORM CONT */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl'>Welcome!</h1>
          <p>Log in to your account or create new one.</p>
          <button className='flex  gap-4 p-4 ring-2 ring-red-100 rounded'>
            <Image src='/google.png' alt='google' width={20} height={20}></Image>
              <span>
                Sign in with Google
              </span>
          </button>
          <button className='flex  gap-4 p-4 ring-2 ring-blue-100 rounded'>
            <Image src='/facebook.png' alt='google' width={20} height={20}></Image>
              <span>
                Sign in with Facebook
              </span>
          </button>
          <p className='text-sm'>
            Have a problem? <Link href='/' className='underline'>Contact us!</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage