import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Product-ad',
    github: 'https://github.com/Anya-wUw/firstboots',
    demo: 'https://anya-wuw.github.io/firstboots/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'User Page',
    github: 'https://github.com/Anya-wUw/UsersGlassLk',
    demo: 'https://anya-wuw.github.io/UsersGlassLk/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Platform for learning',
    github: 'https://github.com/Anya-wUw/django_lcz',
    demo: 'https://github.com/Anya-wUw'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Login Page',
    github: 'https://github.com/Anya-wUw/login_reg',
    demo: 'https://anya-wuw.github.io/login_reg/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Logo',
    github: 'https://github.com/Anya-wUw',
    demo: 'https://www.behance.net/anniborri'
  },
  {
    id: 6,
    image: IMG6,
    title: 'One more logo',
    github: 'https://github.com/Anya-wUw',
    demo: 'https://www.behance.net/anniborri'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio