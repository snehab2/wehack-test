import React from 'react'
import './Footer.css'
import Button from '@/app/components/Button/Button'

function Footer() {
  return (
    <div className='footer-container w-full h-auto flex flex-col md:flex-row lg:flex-row items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start p-20 gap-y-10 md:gap-x-3 lg:gap-x-5'>
        <div className='main-container w-full flex flex-wrap flex-col items-center content-center gap-y-6 md:items-start md:content-start lg:items-start lg:content-start'>
            <img className="wehack-logo h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72" src="./2024 images/LogoSparkle.png" alt="wehack logo"></img>
            <p className='about-text text-[#FFE9D7] font-medium text-xl lg:text-xl text-center'>Made with 💪🤍 by WEHack 2025</p>
        </div>
        <div className='navigation-container w-full flex flex-wrap flex-col content-center justify-center gap-y-6 md:w-1/2 lg:w-1/2'>
            <h1 className='about-title text-[#FFE9D7] font-medium text-3xl lg:text-4xl text-center'>Navigation</h1>
            {/* <a href="#home">Home</a>
            <a href="#about-wehack">About</a>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Conduct</a> */}
            <Button link={'#home'} buttonText={'Home'}/>
            <Button link={'#about-wehack'} buttonText={'About'}/>
            <Button link={'https://static.mlh.io/docs/mlh-code-of-conduct.pdf'} buttonText={'MLH Conduct'}/>
        </div>
        <div className='contact-us-container w-full flex flex-wrap flex-col content-center justify-center gap-y-6 md:w-1/2 lg:w-1/2'>
            <h1 className='about-title text-[#FFE9D7] font-medium text-3xl lg:text-4xl text-left'>Contact Us</h1>
            {/* <a href="mailto:wehackutd@gmail.com" target="_blank">Email</a>
            <a href="https://www.instagram.com/wehackutd/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/company/wehackutd-2020/"target="_blank">LinkedIn</a>
            <a href="https://www.facebook.com/WEHackUTD/" target="_blank">Facebook</a>
            <a href="https://x.com/wehackutd" target="_blank">X</a> */}
            <Button link={'mailto:wehackutd@gmail.com'} buttonText={'Email'}/>
            <Button link={'https://www.instagram.com/wehackutd/'} buttonText={'Instagram'}/>
            <Button link={'https://www.linkedin.com/company/wehackutd-2020/'} buttonText={'LinkedIn'}/>
            <Button link={'https://www.facebook.com/WEHackUTD/'} buttonText={'Facebook'}/>
            <Button link={'https://x.com/wehackutd'} buttonText={'X'}/>
        </div>
    </div>
  )
}

export default Footer