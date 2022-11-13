import React, { useEffect, useState } from 'react';
import Image from '../assets/img.png';

export default function CartItem() {
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(5);


    const handleClick = () => {
        if(amount === 0) {
            setTotal(0);
            return;
        }
        setTotal(amount * 100);
    }
    useEffect(() => {
        handleClick()
    }, [amount]);
      return (
<li className="list-group-item d-flex py-3 m-1 rounded-2 justify-content-between align-items-center">
    <img src={Image} alt="cart-item" width="60" height="60" className="flex-shrink-0 border"></img>
    <div className='px-2'>
        <h6 className="my-0">Product name</h6>
        <small className="text-muted">Brief description </small>
    </div>
    <div className="btn-group">
        <button type="button" className="btn btn-secondary m-1 rounded-2 " onClick={() => {
            if(amount === 0) {
                return;
            }
            setAmount(amount -1)
        }}>+</button>
        <span className="text-muted border d-flex justify-content-evenly align-items-center p-2 m-1">{amount}</span>
        <button type="button" className="btn btn-secondary m-1 rounded-2" onClick={() => setAmount(amount +1)}>-</button>
    </div>
    <span className="text-muted border d-flex justify-content-evenly align-items-center p-1 m-1">${total}</span>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</li>
  )
}
