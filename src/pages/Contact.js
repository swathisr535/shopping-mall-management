import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        {/* Image Section */}
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="Contact Us" />
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            534567 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 444-2345 <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
