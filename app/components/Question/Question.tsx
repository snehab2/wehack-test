import React from 'react'
import './Question.css'
function Question({question, answer} : {question : String, answer : String}) {
  return (
    <div className="question w-full lg:w-10/12">
        <details>
            <summary className='flex justify-between list-none w-full bg-[#FFE9D7] text-[#4A3628] p-2'>{question}</summary>
                <div className="panel">
                    {answer}
                </div>
        </details>
    </div>
  )
}

export default Question