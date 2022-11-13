import React from 'react';
import AccordionItem from '../components/AccordionItem';
import FeatureCard from '../components/FeatureCard';
import Food from '../assets/therapy.png';

function About() {
  return (
<div >

<section className="container my-5">
    <div className="row p-2 pb-0 pe-lg-0 pt-lg-1 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-4 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">About Us</h1>
        <p className='lead'>
            We are a <span className='text-success'>Food</span> and <span className='text-success'>Nutrition</span>
            consultants organization that offer nutrition services and other related services.
        </p>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={Food} alt="" width="720" />
      </div>
    </div>
</section>


<section className="container py-5">
    <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
            <h1 className="h1">Why Choose Us</h1>
            <p>
                Simply The Best
            </p>
        </div>
    </div>
    <div className="row">
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
</section>

<section className="container py-5" id='faq'>
    <h1 className="h1 text-center">Frequently Asked Questions</h1>
    <div className="accordion m-2 p-2" id="accordionExample ">
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem /> 
      </div>
    </section>
</div>
  )
}

export default About;
