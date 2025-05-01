import React from 'react'
import BodyContent from '@/mainLayout/BodyContent'
import HeadContent from '@/mainLayout/HeadContent'

function ContactUs() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <HeadContent />
      </div>
      <div className="pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="rounded-xl shadow-2xl bg-white p-8 md:mt-12 mt-6">
          <BodyContent>
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">We're here to help!</h2>
                <p className="text-gray-700 mb-4">
                  Have questions or need support? Get in touch with our team and we’ll get back to you as soon as possible.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li><strong>📍 Address:</strong> nano Street, kurunegala, Sri Lanka</li>
                  <li><strong>📧 Email:</strong> support@npaywallet.com</li>
                  <li><strong>📞 Phone:</strong> +94 11 234 5678</li>
                  <li><strong>🕒 Working Hours:</strong> Mon - Fri | 9:00 AM - 5:00 PM</li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                      rows="4"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </BodyContent>
        </div>
      </div>
    </>
  )
}

export default ContactUs
