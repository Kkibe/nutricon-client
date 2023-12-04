import React, { useState } from 'react';
import { useContext } from 'react';
import Image from '../assets/img.png'
import { UserContext } from '../UserContext';
import {  Link, NavLink} from "react-router-dom";
import Icon from '../assets/icon.png';

function Topnav() {
  const {user, setUser} = useContext(UserContext); 
  return (
  <nav className="text-bg-dark   bg-warning  sticky-top  ">
  <header className="p-0 border-bottom  ">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start p-2 ">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src={Icon} alt="mdo" width="32" height="32" className="rounded-circle border me-2" />
        <span className="fs-4 text-success lead">Nutricon</span>
      </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-pills">
          <li className="nav-item mx-2"><NavLink to='/' className='nav-link px-2'  title='home'>Home</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/services' className='nav-link px-2'  title='services'>Services</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/blogs' className='nav-link px-2' title='blogs'>Blogs</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/about' className='nav-link px-2' title='about us'>About</NavLink></li>
          <li className="nav-item mx-2"><NavLink to='/contact' className='nav-link px-2' title='contact'>Contact</NavLink></li>
        </ul>

        {
          user ? (
            <div className="dropdown text-end">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Image} alt="mdo" width="32" height="32" className="rounded-circle border" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
            </ul>
          </div>
          ) : (
            <div className="text-end">
              <a href='/login' className="btn btn-outline-success me-2" role='button'>Login</a>
              <a href='/register' className="btn btn-outline-secondary me-2 " role='button'>Register</a>
          </div>
          )
        }
    </div>
  </header>
    <header className="py-2 m-1 border-bottom ">
      <div className="container d-flex flex-wrap justify-content-space-evenly">
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
