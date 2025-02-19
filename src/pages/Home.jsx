import BodyContent from '@/mainLayout/BodyContent'
import FooterContent from '@/mainLayout/FooterContent'
import HeadContent from '@/mainLayout/HeadContent'
import React from 'react'

function Home() {
  return (
    <>
    <HeadContent />
    <BodyContent>
        <p>Welcome to the Home page Body content</p>
    </BodyContent>
    <FooterContent />
    </>
  )
}

export default Home