import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image Section */}
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us" />
        
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to Forever – your destination for timeless quality and lasting memories. At Forever, we believe in creating experiences and products that are meant to be the best cherishment. Our story began with a simple idea: to provide unique, high-quality items that stand the test of time, inspiring joy and connection.</p>
          <p>Our team is dedicated to crafting products that blend style, durability, and sustainability. From handpicked materials to meticulous design, every detail is chosen to ensure our products not only meet your needs but exceed your expectations.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To bring timeless quality to modern life, creating products that are made to last and cherished forever.We're dedicated to providing a seamless shopping experience that exceeds expectations of the customer.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
