import React from 'react'
import image from '../images/bg-section-top-desktop-1.svg'
import img from '../images/illustration-grow-together.svg'
import images from '../images/bg-section-bottom-desktop-1.svg'

const Image = () => {
  return (
    <div className=''>
      <div>
        <img src={image} alt="" width='100%' />
        <div className='ImageDiv py-5'>
          <div className='my-5 py-5'>
            <h1 className='fw-bolder'>Grow Together</h1>
            <p className=' text text-secondary'> General meaningful discussion
                with your audience and build a <br />
                strong, loyal community.Think of  the insightful
                conversations you <br /> miss out   on with a feedback form.
            </p>
          </div>
          <img src={img} alt="" width='50%' />
        </div>
        <img src={images} alt="" width='100%' />
      </div>
    </div>
  )
}

export default Image
