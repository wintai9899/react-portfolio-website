import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from '../../assets/profile_photo.png'
import HeaderSocials from "./HeaderSocials"


const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I am</h4>
        <h1>Wintai Chan</h1>
        <h2 className="text-light">Entry-level Software Developer</h2>
        <CTA />
        <HeaderSocials/>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header