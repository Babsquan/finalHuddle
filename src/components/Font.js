import React from 'react'
import icon from '../images/icon-communities.svg' 
import message from '../images/icon-messages.svg' 
 
const Font = () => {
  return (
    <div className='fontdiv d-flex my-5 mx-5'>
     <div>
     <img src={icon} alt="" />
      <h1 className='fw-bolder'>1.4k+</h1>
      <p className='fw-bold text-secondary'>Commuties Formed</p>
     </div>
     <div className='micons'>
      <img src={message} alt="" />
      <h1 className='fw-bolder'>2.7m+</h1>
      <p className='fw-bold text-secondary'>Message Sent</p>
     </div>
    </div>
  )
}

export default Font