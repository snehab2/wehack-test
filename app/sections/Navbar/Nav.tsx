import React from 'react'
import './Nav.css'
 
function Nav() {
  return (
    <nav> 
        <div className="nav-header">      
            <img className="wehack-logo h-auto max-w-12" src="./images/LogoSparkle.png" alt="wehack logo"></img>
        </div>

        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <ul className="collapse-menu">
            <li><a href="#wehack">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#meettheteam">Team</a></li>
            <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Conduct</a></li>
        </ul>
        
  </nav>
  )
}

export default Nav