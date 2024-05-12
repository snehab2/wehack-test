import React from 'react'
import './About.css'
import Stats from '@/app/components/Stats/Stats'

function About() {
  return (
    <section className='parent-container about-section bg-[#755642]' id="about-wehack">
      {/* group 1 */}
      <div className='about-group flex flex-wrap flex-col sm:flex-row md:flex-row: lg:flex-row'>
        <div className='child-container'>
            <div className='paragraph-1 flex flex-wrap flex-col gap-y-5'>
                <h1 className='about-title text-[#FFE9D7] font-medium text-4xl lg:text-5xl text-left'>Dallas' Largest Inclusive Hackathon</h1>
                <p className='about-text text-[#FFE9D7] font-medium text-lg lg:text-xl text-left'>UTD's women-driven tech organizations are excited to join forces and present our 24-hour hackathon uniting women and non-binary students. Our goal is to create an inclusive environment that highlights and empowers women, femme, and non-binary students through technology.</p>
            </div>
        </div>
        <div className='child-container'>
            <img className="about-image h-auto max-w-76 sm:max-w-full md:max-w-96 lg:max-w-full sm:mt-5" src="./2024 images/IMG_0165.jpg" alt="wehack logo"></img>
        </div>
      </div>

      {/* group 2 */}
      <div className='about-group flex flex-wrap-reverse flex-col sm:flex-row md:flex-row: lg:flex-row pt-32 sm:pt-36 md:pt-48 lg:pt-72'>
        <div className='child-container'>
            <img className="about-image h-auto max-w-76 sm:max-w-full md:max-w-96 lg:max-w-full sm:mt-5" src="./2024 images/IMG_1752.jpg" alt="wehack logo"></img>
        </div>
        <div className='child-container'>
            <div className='paragraph-2 flex flex-wrap flex-col gap-y-5'>
                <p className='about-text text-[#FFE9D7] font-medium text-lg lg:text-xl text-left'>We aim to encourage more underrepresented individuals to harness their skills by creating software or hardware projects of their own. Whether it's networking with sponsors and hackers, gaining development and workshop experience, or competing against other teams for challenges and prizes, WEHack offers participants an opportunity to end the weekend with unique takeaways.</p>
            </div>
        </div>
      </div>

      {/* stats */}
      <Stats/>
    </section>
  )
}

export default About