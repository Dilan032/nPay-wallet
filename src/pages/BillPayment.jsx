import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function BillPayment() {
  const [formData, setFormData] = useState({
    biller: '',
    accountNumber: '',
    amount: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Paid ${formData.amount} to ${formData.biller} (Acc: ${formData.accountNumber})`)
    // Add your payment logic here
  }

  return (
    <>
      {/* Header */}
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <HeadContent />
      </div>

      {/* Content */}
      <div className="pt-24 pb-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="bg-white rounded-xl shadow-md p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Bill Payment</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Biller */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Select Biller</label>
                <select
                  name="biller"
                  value={formData.biller}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-200"
                >
                  <option value="">-- Choose Biller --</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Water">Water</option>
                  <option value="Internet">Internet</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </div>

              {/* Account Number */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter Account Number"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter Amount"
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default BillPayment
