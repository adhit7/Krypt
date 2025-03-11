import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:justify-center justify-between items-center  p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col items-center justify-between'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt='logo' className='w-32' />
        </div>
        <div className='flex flex-1 justify-evenly items-center sm:mt-0 mt-5'>
          <a
            href='https://www.coingecko.com'
            target='_blank'
            className='text-white text-base text-center mx-2 cursor-pointer'
          >
            Market
          </a>

          <a
            href='https://www.coingecko.com/en/exchanges'
            target='_blank'
            className='text-white text-base text-center mx-2 cursor-pointer'
          >
            Exchange
          </a>
          <a
            href='https://www.coingecko.com/learn'
            target='_blank'
            className='text-white text-base text-center mx-2 cursor-pointer'
          >
            Tutorials
          </a>
          <a
            href='https://www.coingecko.com/learn/category/wallets-and-bridges'
            target='_blank'
            className='text-white text-base text-center mx-2 cursor-pointer'
          >
            Wallets
          </a>
        </div>
      </div>

      {/* <div className='flex flex-col items-center justify-center mt-5'>
        <p className='text-white text-center text-sm'>Come join us</p>
        <p className='text-white text-center text-sm'>
          adhithyanalan@gmail.com
        </p>
      </div> */}

      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 ' />

      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-white text-left text-xs'>@adhit7</p>
        <p className='text-white text-left text-xs'>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
