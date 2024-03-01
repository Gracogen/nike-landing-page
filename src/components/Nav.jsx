import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images/index';
import { navLinks } from '../constants';

const Nav = () => {
  const [navBarOpen, setNavBarOpen] = useState(true);
  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 '>
          {navLinks.map((item) => ( //It's wise to use () instead of {} in arrow functions, esp in .jsx document.
            <li key={item.label} >
              <a
                href={item.href} className='font-montserrat text-lg leading-normal text-slate-gray max-lg:hidden '>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block' onClick={()=> setNavBarOpen((prev)=> !prev)} >
          {navBarOpen ? 
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        :
        <p>close</p>}

          {/* 'w-[50%] hidden h-auto bg-slate-gray rounded-xl leading-8 text-white mt-10 text-center relative p-7 mr-25' */}
        </div>
        <div className={`w-[50%] ${navBarOpen
        ? 'hidden' : 'block'} 
         h-auto bg-slate-gray rounded-xl leading-8 text-white mt-5 top-10 right-0 text-center absolute p-7`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className='font-montserrat text-lg active:text-coral-red leading-8'>
                  {link.label}
                </a>
              </li>
            ))}

          </ul>

        </div>
      </nav>
    </header>
  )
};

export default Nav;