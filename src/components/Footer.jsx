import React from 'react';
import {Link, NavLink} from 'react-router-dom';

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
          <li className="nav-item mx-2"><NavLink to='/' className='nav-link  p-0 text-muted'  title='home'>Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/services' className="nav-link p-0 text-muted" title='services'>Services</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/blogs' className="nav-link p-0 text-muted" title='blogs'>Blogs</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/about' className="nav-link p-0 text-muted" title='about'>About</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/contact' className="nav-link p-0 text-muted" title='contact'>Contact</NavLink></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-light'>Useful Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to='/meal-planning' className='nav-link  p-0 text-muted'  title='Meal Planning'>Meal Planning</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/recipes' className='nav-link  p-0 text-muted'  title='Food Recipes'>Food Recipes</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/articles/mental' className='nav-link  p-0 text-muted'  title='Nutrition Psychiatry' >Mental Health Nutrition</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/cart' className='nav-link  p-0 text-muted'  title='My Cart'>My Cart</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/register' className='nav-link  p-0 text-muted'  title='Register' >Get Started</NavLink></li>
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
