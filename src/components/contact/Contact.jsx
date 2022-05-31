import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kmk9o74', 'template_wt2wncg', form.current, 'U9K38m87mYki7Dkbe')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>My Contacts</h5>
      <h2>Contact With Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mykittyistoocute@mail.ru</h5>
            <a href="mailto:mykittyistoocute@mail.ru">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@wtfUwU</h5>
            <a href="https://t.me/wtfUwU" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+79690137799</h5>
            <a href="https://wa.me/79690137799?" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact