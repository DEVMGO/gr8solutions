import React from 'react'
import Image from 'next/image'
// images
import Img1 from '@/public/assets/images/home/partner1.png'
import Img2 from '@/public/assets/images/home/partner2.png'
import Img3 from '@/public/assets/images/home/partner3.png'
import Img4 from '@/public/assets/images/home/partner4.png'
import Img5 from '@/public/assets/images/home/partner5.png'
import Img6 from '@/public/assets/images/home/partner6.png'
import Img7 from '@/public/assets/images/home/partner7.png'
import Img8 from '@/public/assets/images/home/partner8.png'

const OurPartners = () => {
    const partnersList = [
        {
            title: '',
            image: Img1,
        },
        {
            title: '',
            image: Img2,
        },
        {
            title: '',
            image: Img3,
        },
        {
            title: '',
            image: Img4,
        },
        {
            title: '',
            image: Img5,
        },
        {
            title: '',
            image: Img6,
        },
        {
            title: '',
            image: Img7,
        },
        {
            title: '',
            image: Img8,
        },
    ]
  return (
    <div className='w-full flex items-center justify-start flex-col 3xl:mb-52 md:mb-36 mb-24'>
        <div className='w-full flex items-center justify-start mb-24'>
            <h5 className='3xl:text-2xl text-lg font-medium'>Våra samarbetspartners</h5>
        </div>
        <div className='w-full max-w-4xl gap-20 grid md:grid-cols-16 grid-cols-22 items-center justify-center '>
            {partnersList.map((item , index) => (<Image key={index} src={item.image} alt={item.title} />))}
        </div>
    </div>
  )
}

export default OurPartners