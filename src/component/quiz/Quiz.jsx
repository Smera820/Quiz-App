import React from 'react'
import './Quiz.css'

function Quiz() {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>1. What process allows React to update the DOM efficiently?</h2>
        <ul>
            <li>Binding</li>
            <li>Diffing</li>
            <li>Patching</li>
           
        </ul>
        <button>Next</button>
        <div className='index'>
            1 of 5 Questions
        </div>
        
    </div>
  )
}

export default Quiz