import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>

    <div className='flex flex-col sm:flex-row justify-between gap-10 my-10 mt-40 text-sm'>
      <div className='flex-1'>
        <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s,when an unknown printer took a galey of type and scrambled it to make a type speciman book.
        </p>
      </div>

      <div className='flex-1'>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className='flex-1'>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>contact@foreveryou.com</li>
        </ul>
      </div>
    </div>
    <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
