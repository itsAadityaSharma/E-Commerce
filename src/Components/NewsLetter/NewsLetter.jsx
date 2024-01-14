import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get exclusive offers on  Email</h1>
      <p>Subscribe to our News letter and stay updated.</p>
      <div>
        <input type="email" placeholder='Please enter Email Address' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter