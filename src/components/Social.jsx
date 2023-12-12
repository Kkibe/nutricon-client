import React from 'react';

export default function Social() {
  return (
    <div  className='position-fixed top-50 start-0 translate-middle-y d-xl-none'>
        <ul className="nav flex-column d-flex f;ex-direction-column">
          <li className="nav-item mb-2"><a href="https://facebook.com/kibet" className="nav-link p-0 text-muted border  mx-1 rounded-circle d-flex align-items-center justify-content-center bg-dark" style={{
            borderRadius: '50%',
            width: '40px',
            height: '40px',

          }}><i className="fa fa-brands fa-facebook " ></i></a></li>
          <li className="nav-item mb-2"><a href="https://twitter.com/ancientpupy" className="nav-link p-0 text-muted border  mx-1 rounded-circle d-flex align-items-center justify-content-center bg-dark " style={{
            borderRadius: '50%',
            width: '40px',
            height: '40px',

          }}><i className="fa fa-brands fa-twitter" ></i></a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted border  mx-1 rounded-circle d-flex align-items-center justify-content-center bg-dark" style={{
            borderRadius: '50%',
            width: '40px',
            height: '40px',

          }}><i className="fa fa-brands fa-instagram"></i></a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted border  mx-1 rounded-circle d-flex align-items-center justify-content-center bg-dark" style={{
            borderRadius: '50%',
            width: '40px',
            height: '40px',

          }}><i className="fa fa-brands fa-youtube"></i></a></li>
          <li className="nav-item mb-2"><a href="https://www.linkedin.com" className="nav-link p-0 text-muted border  mx-1 rounded-circle d-flex align-items-center justify-content-center bg-dark" style={{
            borderRadius: '50%',
            width: '40px', 
            height: '40px',

          }}><i className="fa fa-brands fa-linkedin"></i></a></li>
        </ul>
    </div>
  )
}
