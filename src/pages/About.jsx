import React from 'react';
import AccordionItem from '../components/AccordionItem';
import FeatureCard from '../components/FeatureCard';
import Food from '../assets/therapy.png';

function About() {
  return (
<div >

<section className="container my-3">
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
          <img className="rounded-lg-3" src={Food} alt="" width="620" />
      </div>
    </div>
</section>


<section className="container my-5" id="abouttextstyle">
   <div className="row">
     <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
       <small className="text-uppercase" style={{color: "#9B5DE5"}}></small>
       <h1 className="h2 mb-4 font-weight-bold">Our <span style={{color: "#9B5DE5"}}>mission</span></h1>
       <p className="text-secondary" style={{line-height: 2}}>Catering to the individualistic needs of each student.<br/>
         High quality learning experience based on a broad and balanced curriculum.
         To empower students utilise their full potential spiritually, intellectually, physically, socially and morally.
       </p>
     </div>
     <div className="col-md-6 p-0 text-center order-1 order-sm-2">
        <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt=""/>
     </div>
     <div className="col-md-6 p-0 text-center">
       <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt=""/>
     </div>
     <div className="col-md-6 p-4 p-sm-5">
      <small className="text-uppercase" style={{color: "#9B5DE5"}}></small>
      <h1 className="h2 mb-4 font-weight-bold">About<span style={{color: "#9B5DE5"}}> us</span></h1>
      <p className="text-secondary" style={{line-height: 2}}>Maria Auxilium Girls’ Hr. Sec. School is situated at 15G Damalwar Street, Kancheepuram. It is set in a
        conducive atmosphere suitable for the growth of young minds. At Maria Auxilium School every child is given
        individual attention to ensure their holistic development. At MAS , all the needs of the child are met with understanding and utmost care, be it physical, emotional, intellectual or spiritual.
      </p> 
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
