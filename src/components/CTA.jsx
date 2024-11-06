import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className=' cta-text '>Want to contact Me? <br className=' sm:block hidden '/>navigate to Contact Page...</p>
        <Link to='/contact' className='btn' >CONTACT</Link>
    </section>
  )
}

export default CTA
