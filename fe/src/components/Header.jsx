import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 bg-slate-200'>
      <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 h-full flex justify-between items-center '>
      <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-extrabold font-serif'>XTAGE AI-MODELS</h1>
      <button className='sm:block m-2 p-2 rounded-lg font-bold text-white bg-slate-400'>+ Create Model</button>
      </div>
    </nav>
    </>
  )
}

export default Header
