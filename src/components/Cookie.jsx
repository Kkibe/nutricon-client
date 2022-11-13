import React from 'react'

export default function Cookie() {
  return (
    <div className='d-flex align-items-center justify-content-evenly fixed-bottom w-100 p-2 bg-light'>
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi sed odio non laudantium deserunt ipsam debitis. <a href="login">Learn more about cookies</a></small>
      <a href='login' className="btn btn-outline-primary me-2" role='button'>ACCEPT</a>
    </div>
  )
}
