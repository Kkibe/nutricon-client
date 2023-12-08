import React from 'react';
import AccordionItem from '../components/AccordionItem';
import FeatureCard from '../components/FeatureCard';
import Food from '../assets/therapy.png';

function AboutUs() {
  return (
<div >

<div className="container my-5" id="abouttextstyle">
   <div className="row">
     <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
       <small className="text-uppercase" style={{color: "#9B5DE5"}}></small>
       <h1 className="h2 mb-4" style={{font-weight: 600}}>Our <span style={{color: "#9B5DE5"}}>mission</span></h1>
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
      <h1 className="h2 mb-4" style={{font-weight: 600}}>About<span style={{color: "#9B5DE5"}}> us</span></h1>
      <p className="text-secondary" style={{line-height: 2}}>Maria Auxilium Girls’ Hr. Sec. School is situated at 15G Damalwar Street, Kancheepuram. It is set in a
conducive atmosphere suitable for the growth of young minds. At Maria Auxilium School every child is given
individual attention to ensure their holistic development. At MAS , all the needs of the child are met with understanding and utmost care, be it physical, emotional, intellectual or spiritual.
      </p>
      
    </div>
   </div>
 </div>




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

export default AboutUs;
