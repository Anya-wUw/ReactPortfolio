import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Anya-wUw?tab=repositories" target="_blank"><AiFillGithub/></a>
        <a href="https://t.me/wtfUwU" target="_blank"><BsTelegram/></a>
    </div>
  )
}

export default HeaderSocials