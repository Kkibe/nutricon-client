import React from 'react';
import Service from '../components/Service';
import Menopause from '../assets/pregnancy.png';
import Mental from '../assets/mental.png';
import Vegeterian from '../assets/food.png';

const services = [
  {
    img : {Vegeterian},
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '1'
  },
  {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '2'
  },
  {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '3'
  },
  {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '4'
  },
  {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '5'
  },
  {
    img : '',
    title : 'lorem ipsum dolo sit amet',
    description: "desc",
    rating : 5,
    reviews : 1000,
    price : 256,
    id: '6'
  },
]

function Services() {
  return (
  <div className='container'>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{
          backgroundImage: `url(${Mental})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Nutrition Psychiatry</span></h3>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{
          backgroundImage: `url(${Vegeterian})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Healthy vegerian meals</span></h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${Menopause})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Eating Well During Menopause</span></h3>
          </div>
        </div>
      </div>
    </div>

      <div className="b-example-divider"></div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          services.map(service => {
            return <Service key={service.id} data={service}/>
          })
        }
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
  </div>
  )
}

export default Services;
