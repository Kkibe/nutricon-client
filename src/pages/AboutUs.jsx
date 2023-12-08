import React from 'react';
import AccordionItem from '../components/AccordionItem';
import FeatureCard from '../components/FeatureCard';
import Food from '../assets/therapy.png';

function AboutUs() {
  return (
  <div className="container">
    <p>Hover over the card to see the drop shadow added</p>
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      
      <div className="card">
        <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs;
