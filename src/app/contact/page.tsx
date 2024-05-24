import React from 'react'
import Contact from '../components/Layout/Contact/Contact'
import LogoBar from '../components/ui/LogoBar'

const page = () => {
  return (
    <section className='container-custom mx-auto'>
        <Contact></Contact>
        <div className='bg-white md:px-20 pt-10 '>
        <LogoBar text="Our clients and partners" className="font-medium"></LogoBar>
        </div>
    </section>
  )
}

export default page