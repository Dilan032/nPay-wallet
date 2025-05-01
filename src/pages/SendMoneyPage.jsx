import React, { useState } from 'react'
import HeadContent from '@/mainLayout/HeadContent'
import BodyContent from '@/mainLayout/BodyContent'

function SendMoneyPage() {
  const [sendData, setSendData] = useState({
    recipientEmail: '',
    amount: '',
    note: '',
  })

  const handleChange = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to handle money transfer (e.g., API call)
    alert(`Money sent successfully to ${sendData.recipientEmail} for Rs. ${sendData.amount}`)
  }

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HeadContent />
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <BodyContent>
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Send Money</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Recipient's Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient's Email</label>
                <input
                  type="email"
                  name="recipientEmail"
                  value={sendData.recipientEmail}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-green-300 focus:border-green-500"
                  placeholder="e.g., recipient@example.com"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={sendData.amount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-green-300 focus:border-green-500"
                  placeholder="e.g., 500"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                <textarea
                  name="note"
                  value={sendData.note}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-green-300 focus:border-green-500"
                  placeholder="Add a note for reference"
                />
              </div>

              {/* Submit Button */}
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

export default SendMoneyPage
