import React from 'react'
import './FAQ.css'
import Question from '@/app/components/Question/Question'
function FAQ() {
    // width: 100vw;
    // height: auto;
    
    // /* flex */
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

    // /* spacing */
    // /* padding: top, right, bottom, left */
    // padding: 5rem 2.5rem 10rem 2.5rem
  return (
    <div className='FAQ-container bg-[#755642] w-full h-auto flex flex-wrap flex-row items-center justify-center p-12 lg:pb-96'>
        <h1 className='FAQ-title text-[#FFE9D7] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>Frequently Asked Questions</h1>
        <div className='column-right child-container'>
            <Question question={'Who can attend?'} answer={'Anyone'}/>
        </div>
        <div className='column-left child-container'>
            <Question question={'Who can attend?'} answer={'Anyone'}/>
        </div>
    </div>
  )
}

export default FAQ