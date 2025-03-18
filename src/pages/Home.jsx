import BodyContent from '@/mainLayout/BodyContent'
import FooterContent from '@/mainLayout/FooterContent'
import HeadContent from '@/mainLayout/HeadContent'
import React from 'react'
import Card from '../components/pageComponents/Card'
import PaymentWay from '@/components/pageComponents/paymentOptions/paymentWay'


function Home() {
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 shadow-md'>
        <HeadContent />        
    </div>  
    <div className="pt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-screen drop-shadow-2xl ">  
        <div className='border-2 rounded-sm md:mt-10 mt-4 pb-10 '>    
            <BodyContent>
                <Card />
                <PaymentWay />
            </BodyContent>
        </div>
    </div>
    
    {/* <FooterContent /> */}
    </>
  )
}

export default Home