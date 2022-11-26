import React from 'react'
import mock from '../images/screen-mockups.svg'
const Build = () => {
  return (
    <div className='container my-5'>
    <div className='build d-flex justify-center flex-column align-center'>
        <h1  className='build fw-bolder text-center my-5'>Build The Community Your Fans Will Love</h1>
        <p className='text-secondary '>Huddle re-imagines the way we build communities. You have a <br></br>voice, but so does your audience. Create connections with your <br></br>users as you engage in genuine discussion.</p>

        <button className='btn1 py-3 px-5 my-3 mb-5'>Get Started For Free</button>

        <img src={mock} alt=''/>
      

    </div>
    </div>
  )
}

export default Build