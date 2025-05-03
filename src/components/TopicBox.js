import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
 
  return (
    <div>
      <div className="topicBox">
        <span className='text'>My fav food is {props.food} the price is Rs. {props.price}</span>
        {props.children}
      </div>
    </div>
  )
}
