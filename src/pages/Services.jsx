import React from 'react';
import Service from '../components/Service';
import Menopause from '../assets/pregnancy.png';
import Mental from '../assets/mental.png';
import Vegeterian from '../assets/food.png';
import { services } from '../data';

function Services() {
  return (
  <div className='container'>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 carousel slide">

  <div className="carousel-inner">
      
      <div className="col carousel-item active">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{
          backgroundImage: `url(${Mental})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Nutrition Psychiatry</span></h3>
          </div>
        </div>
      </div>

      <div className="col carousel-item">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{
          backgroundImage: `url(${Vegeterian})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Healthy Vegan Recipes</span></h3>
          </div>
        </div>
      </div>
      <div className="col carousel-item">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${Menopause})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold lead"><span className='lead'>Eating Well During Menopause</span></h3>
          </div>
        </div>
      </div>
    </div>

      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>

      <div className="b-example-divider"></div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          services.map(service => {
            return <Service key={service.id} data={service}/>
          })
        }
      </div>
  </div>
  )
}

export default Services;
