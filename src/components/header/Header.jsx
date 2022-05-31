import React from 'react'
import './header.css'
import BtnC from './BtnC'
import ME from '../../assets/avatar1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anna Borisyuk</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <BtnC/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header