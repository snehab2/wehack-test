import React from 'react'
import './About.css'

function About() {
  return (
    <section className='about-group parent-container bg-[#1A441B]'>
        <div className='child-container'>
            <div className='paragraph flex flex-wrap flex-column gap-y-5'>
                <h1 className='about-text text-[#FFE9D7] font-medium text-4xl text-left'>Dallas' Largest Inclusive Hackathon</h1>
                <p className='about-text text-[#FFE9D7] font-medium text-base text-left'>UTD's women-driven tech organizations are excited to join forces and present our 24-hour hackathon uniting women and non-binary students. Our goal is to create an inclusive environment that highlights and empowers women, femme, and non-binary students through technology. We aim to encourage more underrepresented individuals to harness their skills by creating software or hardware projects of their own. Whether it's networking with sponsors and hackers, gaining development and workshop experience, or competing against other teams for challenges and prizes, WEHack offers participants an opportunity to end the weekend with unique takeaways.</p>
            </div>
        </div>
        <div className='child-container'>
            <img className="h-auto max-w-60 sm:max-w-72 md:max-w-72 lg:max-w-lg" src="./images/LogoSparkle.png" alt="wehack logo"></img>
        </div>
    </section>
  )
}

export default About