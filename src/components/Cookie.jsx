import React from 'react'
import { useState } from 'react'

export default function Cookie() {
  const [isCookiesEnabled, setIsCookiesEnabled] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsCookiesEnabled(true);
  }
  return (
    <div className={`${isCookiesEnabled ? 'd-none' : 'd-flex'} align-items-center justify-content-evenly fixed-bottom w-100 p-1 bg-light`}>
      <small>Love cookies? <a href="login">Learn more about cookies</a></small>
      <a href='login' className="btn btn-outline-primary me-1" role='button' onClick={handleClick}>ACCEPT</a>
    </div>
  )
}
