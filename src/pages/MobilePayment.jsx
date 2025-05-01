import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function MobilePayment() {
  const [paymentData, setPaymentData] = useState({
    mobileNumber: '',
    amount: '',
    note: '',
  })

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Payment of Rs. ${paymentData.amount} sent to ${paymentData.mobileNumber}`)
    // Add actual API/payment logic here
  }

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HeadContent />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-10 min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50 to-indigo-100">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Mobile Payment</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={paymentData.mobileNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="e.g., 0771234567"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={paymentData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="e.g., 500"
                />
              </div>

              {/* Note (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                <textarea
                  name="note"
                  value={paymentData.note}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="Add a note for the recipient"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  Make Payment
                </button>
              </div>
            </form>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default MobilePayment
