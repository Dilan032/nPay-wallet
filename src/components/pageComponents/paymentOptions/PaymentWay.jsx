import React from 'react'
import topup from '../../../assets/icon/topup.png'
import sendMoney from '../../../assets/icon/sendMoney.png'
import moneytransfer from '../../../assets/icon/moneytransfer.png'
import mobilePay from '../../../assets/icon/mobilePay.png'
import billPay from '../../../assets/icon/billPay.png'
import cardPay from '../../../assets/icon/cardPay.png'
import history from '../../../assets/icon/history.png'
import profile from '../../../assets/icon/profile.png'
import contact from '../../../assets/icon/contact.png'

function PaymentWay() {
  return (
    <>
        <div className="flex justify-center mt-5">
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-blue-900 text-center">
                    <div className="bg-white md:h-32 h-24 p-5 py-5 md:w-40 w-30 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={topup} alt="top-up" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Top up</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={sendMoney} alt="sendMoney" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Send money</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={moneytransfer} alt="moneytransfer" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Transfer</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={mobilePay} alt="mobilePay" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Mobile Payment</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={billPay} alt="billPay" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Bill Payment</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={history} alt="history" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Mobile Payee</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={contact} alt="contact" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Contact Us</p>
                    </div>
                    <div className="bg-white md:h-32 h-24 p-5 py-5 w-40 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                        <img src={profile} alt="profile" className="md:w-12 w-8 md:h-12 h-8 object-contain" />
                        <p className="mt-2">Profile</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PaymentWay