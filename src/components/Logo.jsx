import React from 'react'
import logo from '@/assets/logo.png'

function Logo({ className }) {
  return (
        // use props to pass the className
        <img src={logo} alt="logo" className={className} />
  )
}

export default Logo