import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../UserContext';

function Login() {
  const {user, setUser} = useContext(UserContext); 
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const baseUrl = 'http://localhost:5000/api/auth/login'


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(baseUrl, {
      email,
      username,
      password
    })
    setUser(res)
    console.log(res)
  }
  
  return (
  <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
          <p className='lead'>Welcome back</p>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
            onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingUsername"
            onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
            onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          <hr className="my-4" />
          <small className="text-muted">Don't have an account?<a href="/register" className="px-2 ">Register</a></small>
        </form>
    </div>
  </div>
  )
}

export default Login
