import React from 'react'
import Banner from './components/Banner'
import Blog from './blog/page'
import Offer from './Offer/page'
import ContactUs from './contactus/page'


export default function page() {
  return (
    <div>
     <Banner />
     <Blog />
     <Offer/>
     <ContactUs />
    </div>
  )
}
