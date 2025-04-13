import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { NavLink,Link} from 'react-router-dom' 
import { ShopContext } from '../context/ShopContext.js'

const Navbar = () => {
     
   const {setShowSearch,getCartCount} = useContext(ShopContext);


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="Logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME <hr/></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/orders' className='flex flex-col items-center gap-1'>
          <p>ORDERS<hr/></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT<hr/></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT<hr/></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION<hr/></p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'  alt="Search" />

        <div className='group relatives'>
         <Link to='/login'><img src= {assets.profile_icon} className='w-5 cursor-pointer'   alt="Profile" /></Link> 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
           <img src={assets.cart_icon} className='w-5 min-w-5'  alt="" />
           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
      </div>
      </div>
  )
}

export default Navbar
