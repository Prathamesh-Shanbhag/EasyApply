import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './assets/ealogo.png';

function Navbar() {
  return (
    <nav className='navbar' id='nav'>
      <div className='nav-center'>
        {/* <!-- nav header  --> */}
        <div className='nav-header'>
          <a href='#home'>
            <img src={image} alt='EasyApplylogo' className='nav-logo' />
          </a>
        </div>
        {/* <!-- end of navbar header  -->
          <!-- navbar links  --> */}
        <div className='links-container'>
          <div className='nav-links'>
            <NavLink className='nav-link scroll-link' to='/' exact>
              Home
            </NavLink>
            <NavLink className='nav-link scroll-link' to='/Jobs' exact>
              Apply
            </NavLink>
            <a href='#home' className='nav-link scroll-link'>
              Login
            </a>
            <a href='#home' className='nav-link scroll-link'>
              About
            </a>
          </div>
        </div>
        {/* <!-- end of nav bar links  -->
          <!-- nav social  --> */}
        <div className='nav-icons'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i className='fab fa-facebook nav-icon'></i>
          </a>

          <a
            href='https://www.twitter.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i className='fab fa-twitter nav-icon'></i>
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i className='fab fa-instagram nav-icon'></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
