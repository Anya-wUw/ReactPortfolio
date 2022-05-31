import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {IoLogoOctocat} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Borisyuk <IoLogoOctocat/></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Anya-wUw?tab=repositories" target="_blank"><AiFillGithub/></a>
        <a href="https://t.me/wtfUwU" target="_blank"><BsTelegram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anna Borisyuk</small>
      </div>
    </footer>
  )
}

export default Footer