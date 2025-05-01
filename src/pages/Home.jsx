import BodyContent from '@/mainLayout/BodyContent'
import FooterContent from '@/mainLayout/FooterContent'
import HeadContent from '@/mainLayout/HeadContent'
import React from 'react'
import Card from '../components/pageComponents/Card'
import PaymentWay from '../components/pageComponents/paymentOptions/PaymentWay.jsx'

function Home() {
  return (
    <>
      {/* Header */}
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <HeadContent />        
      </div>  

      {/* Main Content */}
      <div className="pt-24 pb-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className='rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl'>    
          <BodyContent>
            {/* Card Section */}
            <div className="py-6 px-4 sm:px-8">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700 text-center mb-4">
                Welcome to <span className="text-blue-500">nPay Wallet</span>
              </h1>
              <Card />
            </div>

            {/* Payment Options */}
            <div className="py-4 px-4 sm:px-8 bg-blue-50 rounded-b-xl">
              <PaymentWay />
            </div>
          </BodyContent>
        </div>
      </div>
      
      {/* Optional Footer */}
      {/* <FooterContent /> */}
    </>
  )
}

export default Home
