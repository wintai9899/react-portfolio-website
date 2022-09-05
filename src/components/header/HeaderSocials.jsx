import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/wintai-chan/" target="_blank" rel="noreferrer"><BsLinkedin className="header_social-icon"/></a>
        <a href="https://github.com/wintai9899" target="_blank" rel="noreferrer"><BsGithub className="header_social-icon"/></a>
        
    </div>
  )
}

export default HeaderSocials