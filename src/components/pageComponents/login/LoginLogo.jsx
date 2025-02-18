import React from 'react'
import logo from '@/assets/logo.png'

function Logo() {
  return (
    <div className="absolute md:top-5 top-28 left-5">
        <img src={logo} alt="logo" className="md:w-28 w-40 h-auto" />
    </div>
  )
}

export default Logo