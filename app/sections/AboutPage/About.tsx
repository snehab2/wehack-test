import React from 'react'
import './About.css'

function About() {
  return (
    <section className='parent-container w-screen h-auto flex flex-wrap-reverse flex-column sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-y-0.5 lg:gap-x-10 m-0 px-10 pt-24 pb-24 sm:pb-0 md:pb-0 lg:pb-0'>
        <div className='child-container w-full sm:w-1/2 md:w-1/2 lg:w-1/3 sm:h-full md:h-full lg:h-full flex flex-wrap flex-row sm:flex-column md:flex-column lg:flex-column items-center justify-center sm:mt-20 md:mt-20 lg:mt-20'>
            <div className='textCol flex flex-wrap flex-column gap-y-5'>
                <div className='child-container w-full flex flex-wrap flex-row'>
                    <h1 className='jumbo-text font-medium text-5xl text-left'>Dallas' Largest Inclusive Hackathon</h1>
                </div>
                <div className='child-container w-full flex flex-wrap flex-row'>
                    <p className='jumbo-text font-medium text-sm text-left'>UTD's women-driven tech organizations are excited to join forces and present our 24-hour hackathon uniting women and non-binary students. Our goal is to create an inclusive environment that highlights and empowers women, femme, and non-binary students through technology. We aim to encourage more underrepresented individuals to harness their skills by creating software or hardware projects of their own. Whether it's networking with sponsors and hackers, gaining development and workshop experience, or competing against other teams for challenges and prizes, WEHack offers participants an opportunity to end the weekend with unique takeaways.</p>
                </div>
            </div>
        </div>
        <div className='child-container w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-1/2 sm:h-full md:h-full lg:h-full flex flex-wrap flex-row sm:flex-column md:flex-column lg:flex-column items-center justify-center mt-28'>
            <img className="h-auto max-w-60 sm:max-w-72 md:max-w-72 lg:max-w-lg" src="./images/LogoSparkle.png" alt="wehack logo"></img>
        </div>
    </section>
  )
}

export default About