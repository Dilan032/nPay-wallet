import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function TransferPage() {
  const [transferData, setTransferData] = useState({
    recipientMobile: '',
    amount: '',
    note: '',
  })

  const handleChange = (e) => {
    setTransferData({ ...transferData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace this with actual transfer API logic
    alert(`Successfully transferred Rs. ${transferData.amount} to ${transferData.recipientMobile}`)
  }

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HeadContent />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-100">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Transfer Money</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Recipient Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Mobile Number</label>
                <input
                  type="tel"
                  name="recipientMobile"
                  value={transferData.recipientMobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-purple-300 focus:border-purple-500"
                  placeholder="e.g., 0771234567"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={transferData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-purple-300 focus:border-purple-500"
                  placeholder="e.g., 500"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                <textarea
                  name="note"
                  value={transferData.note}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-purple-300 focus:border-purple-500"
                  placeholder="Add a note for the recipient"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
                >
                  Transfer Money
                </button>
              </div>
            </form>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default TransferPage
