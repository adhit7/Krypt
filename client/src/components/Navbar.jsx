import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../assets/logo.png';

const NavBarItem = ({ item: { title, link }, classprops }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classprops}`}>
      <a href={link} target='_blank'>
        {title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    { title: 'Market', link: 'https://www.coingecko.com' },
    {
      title: 'Exchange',
      link: 'https://www.coingecko.com/en/exchanges',
    },
    { title: 'Tutorials', link: 'https://www.coingecko.com/learn' },
    {
      title: 'Wallets',
      link: 'https://www.coingecko.com/learn/category/wallets-and-bridges',
    },
  ];

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial   justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {navItems.map((item, index) => (
          <NavBarItem key={index} item={item} />
        ))}
        {/* <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li> */}
      </ul>
      <div className='flex relative'>
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem key={index} item={item} classprops='my-2 text-lg' />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
