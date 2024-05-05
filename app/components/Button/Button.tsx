import React from 'react'
import './Button.css'

function Button({buttonText, link} : {buttonText : String, link : any}) {
  return (
    <button className="primary-btn bg-[#909634] text-[#FFE9D7] w-full sm:w-auto md:w-auto lg:w-auto py-3 px-5">
        <a href={link} className="text-xl">{buttonText}</a>
    </button>
  )
}

export default Button