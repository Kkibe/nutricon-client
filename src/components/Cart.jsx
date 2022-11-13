import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartItem from './CartItem';


export default function Cart() {
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState(1);

    useEffect(() => {

    }, []);
  return (
    <div  className="modal   bg-secondary  modal-signin d-none position-fixed top-0 end-0 py-5" tabIndex="-1" role="dialog " >
        <div className="modal-dialog " role="document">
            <div className="modal-content rounded-4 shadow bg-light">
                <div className="modal-header p-0 mx-2 pb-1 border-bottom-0 d-flex justify-content-between align-items-center">
                    <h4 className="  modal-title ">Your cart</h4>
                    <span className="lead">4</span>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ">
                    <ul className="  list-group">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </ul>
                    <ul className=" list-group mb-3 ">
                        <li className="list-group-item py-2 m-1 rounded-2 d-flex  justify-content-between">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                           <span className="text-success">−$5</span>
                        </li>
                        <li className=" d-flex py-2 rounded-2 justify-content-between">
                            <span>Total (USD)</span>
                            <strong className='border'>$20</strong>
                        </li>
                        <li className="d-flex py-1 justify-content-between ">
                            <button type='button' className='btn btn-outline-success py-1 m-1 rounded-2'>CHECKOUT NOW</button>
                            <button type='button' className='btn btn-outline-secondary py-1 m-1 rounded-2'>CONTINUE SHOPPING</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
