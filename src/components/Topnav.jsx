import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import Image from '../assets/img.png'
import { UserContext } from '../UserContext';
import {  Link, NavLink} from "react-router-dom";
import Icon from '../assets/icon.png';

function Topnav() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    setUser(true);
  }, []); 
  return (
  <nav className="text-bg-dark   bg-warning  sticky-top  ">
  <header className="p-0 border-bottom  ">
    <div className="d-flex flex-wrap align-items-center justify-content-between p-2 ">
      <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none icon-link">
        <img src={Icon} alt="mdo" width="32" height="32" className="rounded-circle border me-2" />
        <span className="fs-4 text-success lead">Nutricon</span>
      </a>
      {
          user ? (
            <NavLink to="/dashboard" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Image} alt="mdo" width="38" height="38" className="rounded-circle border" />
            </NavLink>
          ) : (
            <div className="text-end">
              <NavLink to='/login' className="btn btn-outline-success me-2" role='button'>Login</NavLink>
              <NavLink to='/register' className="btn btn-outline-secondary me-2 " role='button'>Register</NavLink>
            </div>
          )
      } 
    </div>
  </header>
    <header className="py-1 border-bottom d-lg-block d-xl-block">
      <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0 nav-pills">
          <li className="nav-item mx-2"><NavLink to='/' className='nav-link px-2'  title='home'>Home</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/services' className='nav-link px-2'  title='services'>Services</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/blogs' className='nav-link px-2' title='blogs'>Blogs</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/about' className='nav-link px-2' title='about us'>About</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/contact' className='nav-link px-2' title='contact'>Contact</NavLink></li>
        </ul>

      <div className="container d-none flex-wrap justify-content-space-evenly">
        <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </header>
  </nav>
  )
}

export default Topnav
