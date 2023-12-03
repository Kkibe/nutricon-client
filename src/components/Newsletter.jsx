import React from 'react'

function Newsletter() {
  return (
    <div className='d-flex justify-content-center align-items-center py-5 my-3 bg-light'>
        <form>
          <h3 className='h3'>Subscribe to our newsletter</h3>
          <p className='lead'>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-success" type="button">Subscribe</button>
          </div>
        </form>
    </div>
  )
}

export default Newsletter;
