import React from 'react'
// Components
import ButtonBlack from '@/components/ui/buttons/buttonBlack'
import BlogSlider from './blogSlider'

const Blog = () => {
  return (
    <div className='w-full flex items-center justify-start flex-col 3xl:mt-60 mt-40 3xl:gap-24 gap-16'>
        <div className='w-full flex items-center justify-between'>
            <h4 className='3xl:text-6xl md:text-5xl text-4xl font-medium text-black'>BLOGG</h4>
            <ButtonBlack className="3xl:max-w-[237px] max-w-[170px] 3xl:h-[72px] h-14 3xl:text-lg text-sm font-medium">LÄS MER</ButtonBlack>
        </div>
        <div className="w-full flex items-center justify-start relative">
          <BlogSlider />
        </div>
    </div>
  )
}

export default Blog