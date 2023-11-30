import React from 'react';
import Image from '../assets/img.png'

function Testimonial() {
  return (
<div className="col-sm-6 col-lg-4 mb-4 mh-4">
      <div className="card">
        <div className="card-body">
          <img src={Image} alt="mdo" width="32" height="32" className="rounded-circle border" />
          <p className="card-text"> This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
          <figcaption className="blockquote-footer mb-0 text-muted">
            Some one famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
