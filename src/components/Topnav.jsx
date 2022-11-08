import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../assets/img.png'

function Topnav() {
  const [user, setUser] = useState(false);
  return (
  <nav className="text-bg-dark  bg-light">
  <header className="p-2 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32">{/*<use xlink:to="#bootstrap"/>*/}</svg>
        <span className="fs-4 text-success">Nutricon</span>
      </Link>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-pills">
          <li className="nav-item mx-3"><Link to="/" className="nav-link px-2 text-light active bg-dark">Home</Link></li>
          <li className="nav-item "><Link to="services" className="nav-link px-2  link-dark">Services</Link></li>
          <li className="nav-item "><Link to="blogs" className="nav-link px-2 link-dark">Blogs</Link></li>
          <li className="nav-item "><Link to="about" className="nav-link px-2 link-dark">About</Link></li>
          <li className="nav-item "><Link to="contact" className="nav-link px-2 link-dark">Contact</Link></li>
        </ul>

        {
          user ? (
            <div className="dropdown text-end">
            <Link to="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Image} alt="mdo" width="32" height="32" className="rounded-circle border" />
            </Link>
            <ul className="dropdown-menu text-small">
              <li><Link className="dropdown-item" to="#">New project...</Link></li>
              <li><Link className="dropdown-item" to="#">Settings</Link></li>
              <li><Link className="dropdown-item" to="#">Profile</Link></li>
            </ul>
          </div>
          ) : (
            <div className="text-end">
            <button type="button" className="btn btn-outline-success me-2"><Link to="login" className="nav-link px-2  w-100 h-100">Login</Link></button>
            <button type="button" className="btn btn-outline-warning me-2"><Link to="register" className="nav-link px-2  w-100 h-100">Sign-up</Link></button>
          </div>
          )
        }
      </div>
    </div>
  </header>
    <header className="py-2 m-1 border-bottom">
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
