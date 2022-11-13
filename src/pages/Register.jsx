import React from 'react'

function Register() {
  return (
  <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-light">
          <p className='lead'>Sign-up for free</p>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingUsername" placeholder="username" />
            <label htmlFor="floatingUsername">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Repeat Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">REGISTER</button>
          <hr className="my-4" />
          <small className="text-muted">Already have an account?<a href="/login" className="px-2 ">Login</a></small>
        </form>
    </div>
  </div>
  )
}

export default Register;
