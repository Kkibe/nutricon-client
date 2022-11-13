import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
  <footer className="p-4 bg-dark">
    <div className="row">
    <div className="col-md-5 offset-md-1 mb-3">
        <h2 className="h2 text-success pb-3 logo">Nutricon</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">431 University way, Floor 2</a></li>
          <li className="nav-item mb-2"><a href="tel:010-020-0340" className="nav-link p-0 text-muted">010-020-0340</a></li>
          <li className="nav-item mb-2"><a href="mailto:info@company.com" className="nav-link p-0 text-muted">nutriconke@gmail.com</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-light'>Explore now</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="/services" className="nav-link p-0 text-muted">Services</a></li>
          <li className="nav-item mb-2"><a href="/blogs" className="nav-link p-0 text-muted">Blogs</a></li>
          <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-light'>Useful Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Meal Planning</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Food Recipes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mental Health Nutrition</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">My Cart</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Get Started</a></li>
        </ul>
      </div>



    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-1 border-top">
      <p className="col-md-4 mb-0 text-muted">&copy; 2022 Nutricon, Inc</p>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 ">Privacy</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 ">Terms</a></li>
        <li className="nav-item"><a href="/about/#faq" className="nav-link px-2 ">FAQs</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer;
