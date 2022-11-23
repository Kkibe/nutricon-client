import React, { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Image from '../assets/kidney.png';

function Service({data}) {
    const [inCart, setInCart] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setInCart(inCart ? false : true);
    }
  return (
            <div className="col-12 col-md-4 mb-3">
                {
                    data && (
                        <div className="card h-100  card mb-2 product-wap rounded-0">
                    <Link href="shop-single.html">
                        <img src={data.img} className="card-img-top" alt="nutricon-icon" 
                        style={{
                            height: '160px',
                            objectFit: 'fill'
                        }}/>
                    </Link>
                    <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                ({data.ratings}k+)
                            </li>
                            
                            <li className="text-muted text-right border bg-light lead">${data.price}</li>
                        </ul>
                        <Link href="shop-single.html" className="h5 text-decoration-none text-dark">{data.title} </Link>
                        <p className="card-text mt-3">{data.desc}</p>

                        <div className="d-flex justify-content-between">
                            <div className="p-1 text-muted lead">Reviews({data.reviews})</div>

                            <Link href="#" className={`btn  ${inCart ? 'btn-warning' : 'btn-outline-success'}`} onClick={handleClick}>{inCart ? "Remove" : "Add Cart"}</Link>
                          </div>
                    </div>
                </div>
                    )
                }
                
            </div>
  )
}

export default Service;
