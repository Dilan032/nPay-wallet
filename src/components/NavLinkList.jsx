import React from 'react'
import NavLinks from '@/components/NavLinks'

function NavLinkList() {
  return (
    <>
        <div className='text-white'>
            <NavLinks linkName= "Home" url= "/home"/>
            <NavLinks linkName= "AboutUs" url= "/aboutUs"/>
            <NavLinks linkName= "Profile" url= "/profile"/>
            <NavLinks linkName= "Login" url= "/"/>
        </div>
        
    </>
  )
}

export default NavLinkList