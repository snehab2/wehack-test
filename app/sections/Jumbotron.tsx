import React from 'react'
import './Jumbotron.css'
import Button from '../components/Button'

function Jumbotron() {
  return (
    // any property that doesn't start with sm:, md:, lg:, etc are default values for mobile
    // as you increase the screen size, you need to adjust the following for different screen sizes:
    // flex-direction (do the opposite of mobile's flex direction)
    // width for divs (decrease width size as screen size increases)
    // height for divs (increase height size as screen size increases)
    // image size
    // font size
    
    // general formatting for className
    // element name, width (breakpoints), height (breakpoints), flex, flex-wrap, flex-direction (breakpoints), items-center, justify-content, gap, margin, padding

    <section className='parent-container w-screen h-screen flex flex-wrap flex-column sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-y-0.5 m-0 px-10 pb-24 sm:pb-0 md:pb-0 lg:pb-0'>
        <div className='child-container w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-1/2 sm:h-full md:h-full lg:h-full flex flex-wrap flex-row sm:flex-column md:flex-column lg:flex-column items-center justify-center'>
            <img className="h-auto max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg" src="/LogoSparkle.png" alt="wehack logo"></img>
        </div>
        <div className='child-container w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-1/2 sm:h-full md:h-full lg:h-full flex flex-wrap flex-row sm:flex-column md:flex-column lg:flex-column items-center justify-center'>
            <div className='child-container flex flex-wrap flex-column gap-y-7'>
                <div className='child-container w-full flex flex-wrap flex-row items-center justify-center'>
                    <h1 className='jumbo-text font-medium text-5xl lg:text-8xl text-center'>WEHack 2024</h1>
                </div>
                <div className='child-container w-full flex flex-wrap flex-row items-center justify-center'>
                    <h2 className='jumbo-text text-3xl lg:text-5xl text-center'>Enchanted to be Here</h2>
                </div>
                <div className='child-container w-full flex flex-wrap flex-row items-center justify-center'>
                    <Button link={'https://coda.io/@wehack-utd/wehack-2024-registration-form'} buttonText={'Registration'}/>
                </div>
                <div className='child-container w-full flex flex-wrap flex-row items-center justify-center'>
                    <Button link={'https://live.wehackutd.com/'} buttonText={'WEHack Portal'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Jumbotron