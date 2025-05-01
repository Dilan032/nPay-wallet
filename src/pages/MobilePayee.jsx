import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function MobilePayee() {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    name: '',
    amount: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Successfully sent Rs. ${formData.amount} to ${formData.name} (${formData.mobileNumber})`)
    // Add your real payment processing logic here
  }

  return (
    <>
      {/* Header */}
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <HeadContent />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Mobile Payee</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Payee Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-green-200"
                  placeholder="e.g., John Doe"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-green-200"
                  placeholder="e.g., 0771234567"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-green-200"
                  placeholder="e.g., 1000"
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Send Money
                </button>
              </div>
            </form>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default MobilePayee
