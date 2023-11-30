import React from 'react'
import Service from '../components/Service';
import Post from '../components/Post';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
function Home() { 
  return (
    <div>
      <section className="container py-5  d-flex flex-column align-items-center justify-content-center bg-light mb-2">
          <h1 className="display-4 fw-normal">Nutrition Consultation</h1>
          <p className="lead fw-normal lead text-center px-5">We are Specialised in Delivering Comprehensive, High Quality Nutrition Counselling and Help in Establishing Healthy Feeding Programs</p>
          <a className="btn btn-outline-success" href="#">Book Now</a>       
      </section>
      <section className="container py-2 border">
        <div className="row justify-content-evenly m-2 p-2">
          <div className="col col-12 col-md-5  row  justify-content-center align-items-center text-uppercase">
             We Value Cultural Food Heritage
          </div>
          <div className="col col-12 col-md-6 position">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" /*allowfullscreen*/></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container py-3">
        <h1 className="h1 text-center">Our Services</h1>
        <p className='text-center'>Browse Popular Services Now</p>
        <div className="row justify-content-evenly">
          <Service />
          <Service />
          <Service />
        </div>
      </section>

      <section className="container py-3">
        <h1 className="h1 text-center">Why Choose Us</h1>
        <p className='text-center'>We are Nutricon</p>
        <div className="row justify-content-evenly">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section>

      <section className="container py-5">
        <h1 className="h1 text-center">Happy Clients</h1>
        <div className="row justify-content-evenly">
          <Swiper navigation={true}  modules={[Navigation]}>
            <SwiperSlide><Testimonial /></SwiperSlide>
            <SwiperSlide><Testimonial /></SwiperSlide>
            <SwiperSlide><Testimonial /></SwiperSlide>
            <SwiperSlide><Testimonial /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="container py-5">
        <h1 className="h1 text-center">Popular Posts</h1>
        <p className='text-center'>Read From Our Blogs</p>
        <div className="row justify-content-evenly">
          <Post />
          <Post />
          <Post />
        </div>
      </section>

      <div className="container">
        <h2>Guides</h2>
        <p>Other services bu us:</p>
        <ul className="icon-list ps-0">
          <li className="d-flex align-items-start mb-1"><a href="../getting-started/introduction/">Mental health nutrition</a></li>
          <li className="d-flex align-items-start mb-1"><a href="../getting-started/webpack/">Medical nutrition therapy</a></li>
          <li className="d-flex align-items-start mb-1"><a href="../getting-started/parcel/">Maternal & Child nutrition</a></li>
          <li className="d-flex align-items-start mb-1"><a href="../getting-started/vite/">Meal planning</a></li>
          <li className="d-flex align-items-start mb-1"><a href="../getting-started/contribute/">Food Recipes</a></li>
          <li className="text-muted d-flex align-items-start mb-1">Diabetes Management (coming soon!)</li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
