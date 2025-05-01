import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function TopUpPage() {
  const [topUpData, setTopUpData] = useState({
    amount: '',
    paymentMethod: 'Credit/Debit Card',
    cardDetails: '',
    mobileNumber: '',
    note: '',
  })

  const handleChange = (e) => {
    setTopUpData({ ...topUpData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to handle top-up submission (e.g., API call)
    alert(`Top-up of Rs. ${topUpData.amount} successful via ${topUpData.paymentMethod}`)
  }

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HeadContent />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-teal-50 to-teal-100">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Top-Up Your Wallet</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={topUpData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-teal-300 focus:border-teal-500"
                  placeholder="e.g., 500"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={topUpData.paymentMethod}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-teal-300 focus:border-teal-500"
                >
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </div>

              {/* Card Details */}
              {topUpData.paymentMethod === 'Credit/Debit Card' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Details</label>
                  <input
                    type="text"
                    name="cardDetails"
                    value={topUpData.cardDetails}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-teal-300 focus:border-teal-500"
                    placeholder="Card number, expiry date, etc."
                  />
                </div>
              )}

              {/* Mobile Number (if payment method is Mobile Money) */}
              {topUpData.paymentMethod === 'Mobile Money' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={topUpData.mobileNumber}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-teal-300 focus:border-teal-500"
                    placeholder="e.g., 0771234567"
                  />
                </div>
              )}

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                <textarea
                  name="note"
                  value={topUpData.note}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-teal-300 focus:border-teal-500"
                  placeholder="Add a note for reference"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-200"
                >
                  Top-Up Now
                </button>
              </div>
            </form>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default TopUpPage
