import React from 'react'
import NavLinks from '@/components/NavLinks'

function NavLinkList() {
  return (
    <>
        <NavLinks linkName= "Home" url= "/home"/>
        <NavLinks linkName= "Profile" url= "/profile"/>
        <NavLinks linkName= "Login" url= "/"/>
    </>
  )
}

export default NavLinkList