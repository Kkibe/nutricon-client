import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../assets/kidney.png';

function Service() {

    const data = {
        img : '',
        title : 'lorem ipsum dolo sit amet',
        description: "desc",
        rating : 5,
        reviews : 1000,
        price : 256,
        id: '1'
        
      }

    const {img, rating, title, description, reviews, price } = data;
  return (
            <div className="col-12 col-md-4 mb-4">
                <div className="card h-100  card mb-4 product-wap rounded-0">
                    <Link href="shop-single.html">
                        <img src={Image} className="card-img-top" alt="nutricon-icon" />
                    </Link>
                    <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                ({rating}k+)
                            </li>
                            
                            <li className="text-muted text-right border bg-light lead">${price}</li>
                        </ul>
                        <Link href="shop-single.html" className="h5 text-decoration-none text-dark">{title} </Link>
                        <p className="card-text mt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque praesentium consequatur, quod a repellendus similique eius dolorum culpa!
                        </p>

                        <div className="d-flex justify-content-between">
                            <div className="p-1 text-muted lead">Reviews({reviews})</div>


                            <Link href="#" className="btn btn-outline-success">Add To Cart</Link>
                          </div>
                    </div>
                </div>
            </div>
  )
}

export default Service;
