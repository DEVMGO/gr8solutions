import React from 'react'

const Siffror = () => {
  return (
    <div className='w-full flex items-center justify-start flex-col 3xl:gap-24 gap-16 3xl:mb-60 md:mb-40 mb-24'>
        <div className='w-full flex items-center justify-start'>
            <h4 className='text-2xl font-medium text-black'>GR8 Solutions i siffror</h4>
        </div>
        <div className='w-full grid md:grid-cols-21 grid-cols-18 gap-5'>
            <div className='w-full 3xl:h-64 sm:h-52 h-44 rounded-2xl bg-gray-400 flex items-start justify-center flex-col p-8 md:gap-14 gap-10'>
                <h4 className='3xl:text-2xl md:text-xl text-lg font-medium text-white'>Anställda</h4>
                <h5 className='3xl:text-6xl md:text-5xl text-4xl font-medium text-white'>100+</h5>
            </div>
            
            <div className='w-full 3xl:h-64 sm:h-52 h-44 rounded-2xl bg-blueCF flex items-start justify-center flex-col p-8 md:gap-14 gap-10'>
                <h4 className='3xl:text-2xl md:text-xl text-lg font-medium text-white'>Avtal skrivna</h4>
                <h5 className='3xl:text-6xl md:text-5xl text-4xl font-medium text-white'>30000+</h5>
            </div>
            
            <div className='w-full 3xl:h-64 sm:h-52 h-44 rounded-2xl bg-gray-400 flex items-start justify-center flex-col p-8 md:gap-14 gap-10'>
                <h4 className='3xl:text-2xl md:text-xl text-lg font-medium text-white'>Samarbetspartners</h4>
                <h5 className='3xl:text-6xl md:text-5xl text-4xl font-medium text-white'>10+</h5>
            </div>
        </div>
    </div>
  )
}

export default Siffror