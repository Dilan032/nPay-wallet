import React from 'react'
import NavLinkList from '@/components/NavLinkList'
import Logo from '@/components/Logo'

function HeadContent() {
  return (
    <>
        <Logo className={"md:w-28 w-28"}/>
        <NavLinkList />
    </>
  )
}

export default HeadContent