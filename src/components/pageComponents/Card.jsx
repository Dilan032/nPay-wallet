import React from 'react'
import cardImage from '@/assets/home-page/card.svg'

function Card() {
  return (
    <>
        <div className='flex justify-center md:mt-10 mt-6'>
            <img src={cardImage} alt="card image" className='w-45 md:w-96 mx-4 md:ml-10 shadow-inner'/>
            <div className='absolute text-white font-mono  mt-15 pt-16 mr-20'>
                <p className='text-2xl'>01-1010101-00001</p>
                <p>Amal Perera</p>
                <div className='md:mt-14 mt-10 text-lg'>
                    <p>LKR 0.00</p>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default Card