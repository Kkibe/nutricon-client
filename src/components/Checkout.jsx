import React from 'react'

function Checkout() {
  return (
    <div className='container'>


      <div class="dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-600px">
  <nav class="d-grid gap-2 col-8">
    <a href="#" class="btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start">
      {/*<svg class="bi" width="32" height="32"><use xlink:href="#image-fill"/></svg>*/}
      <div>
        <strong class="d-block">Features</strong>
        <small>Take a tour through the product</small>
      </div>
    </a>
    <a href="#" class="btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start">
      {/*<svg class="bi" width="32" height="32"><use xlink:href="#image-fill"/></svg>*/}
      <div>
        <strong class="d-block">Support</strong>
        <small>Get help from our support crew</small>
      </div>
    </a>
  </nav>
  </div>
    </div>
  )
}

export default Checkout
