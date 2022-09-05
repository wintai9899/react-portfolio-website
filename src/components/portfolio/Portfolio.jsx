import React from 'react'
import "./portfolio.css"

import IMG1 from "../../assets/portfolio1_1.png"
import IMG2 from "../../assets/screenshot1.png"
import IMG3 from "../../assets/screenshot3.png"

const data = [
  {
    id:1,
    image:IMG1,
    title:"IoT based Home Monitoring System",
    github:"https://github.com/wintai9899/Firebase-Web-Application-for-Home-Monitoring-System"

  },
  {
    id:2,
    image:IMG2,
    title:"Decentralized Crowd Funding Platform",
    github:"https://github.com/wintai9899/kickstarter-campaign-smart-contract"

  },
  {
    id:3,
    image:IMG3,
    title:"Network Topological Search App",
    github:"https://github.com/wintai9899/Netstat-Map-Python-Flask-Vue.js-"

  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        {
         data.map(({id,image,title,github}) => {
           return(
            <article key={id} className="portfolio_item">
              <div className='portfolio_item-image'>
                <img src={image} alt={title}/>
              </div>
                  <h3>{title}</h3>
              <div className="portfolio_item-cta">
                  <a href={github} target="_blank" rel="noreferrer" className="btn btn-primary">Github</a>
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