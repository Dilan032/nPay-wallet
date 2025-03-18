import React from 'react'
import BodyContent from '@/mainLayout/BodyContent'
import HeadContent from '@/mainLayout/HeadContent'

function ContactUs() {
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <HeadContent />        
    </div>
    <div className="pt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-screen drop-shadow-2xl">
        <div className='border-2 rounded-sm md:mt-10 mt-4 pb-10 '>  
            <BodyContent>
                <h1>about us</h1>
            </BodyContent>
        </div>
    </div>
    </>
  )
}

export default ContactUs