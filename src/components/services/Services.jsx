import React from 'react'
import './services.css'
import {HiOutlineShieldCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services___container">
        <article className='service'>
          <div className="services__head">
            <h3>Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Logo for your business</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Illustrations for everything</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>3D models, your ideas into reality</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Photoshop anything</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Portfolio</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Product-shop</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Advertising</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>And your other ideas..</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Some text</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Some text</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Some text</p>
            </li>
            <li>
              <HiOutlineShieldCheck className='service__list-icon'/>
              <p>Some text</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services