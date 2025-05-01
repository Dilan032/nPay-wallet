import BodyContent from '@/mainLayout/BodyContent'
import HeadContent from '@/mainLayout/HeadContent'
import React from 'react'

function AboutUs() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-lg'>
        <HeadContent />
      </div>
      <div className="pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className='rounded-xl shadow-2xl bg-white p-8 md:mt-12 mt-6'>
          <BodyContent>
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6 tracking-wide">
              Welcome to <span className="text-blue-500">nPay Wallet</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              nPay Wallet is your trusted digital wallet for secure, fast, and effortless online payments. Whether you're making personal or business transactions, our platform offers a seamless experience with top-notch security.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">🔐 Secure Transactions</h3>
                <p className="text-gray-600 text-sm">Your payments are protected with advanced encryption and real-time fraud detection technology.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">⚡ Fast & Reliable</h3>
                <p className="text-gray-600 text-sm">Enjoy lightning-fast money transfers and 24/7 system reliability with nPay Wallet.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">📱 User-Friendly</h3>
                <p className="text-gray-600 text-sm">Our platform is designed with simplicity in mind, making it easy for anyone to use.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-md text-gray-700">
                Join thousands of users who trust <strong>nPay Wallet</strong> for their daily transactions. We're committed to making your financial life easier.
              </p>
              <p className="mt-2 text-blue-600 font-semibold">Experience the future of payments — today.</p>
            </div>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default AboutUs
