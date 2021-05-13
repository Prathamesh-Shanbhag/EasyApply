import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './assets/ealogo.png';

function Navbar() {
  return (
    <nav class='navbar' id='nav'>
      <div class='nav-center'>
        {/* <!-- nav header  --> */}
        <div class='nav-header'>
          <a href='#home'>
            <img src={image} alt='EasyApplylogo' class='nav-logo' />
          </a>
          <button
            type='button'
            class='nav-toggle'
            id='nav-toggle'
            aria-label='nav-toggler'
          >
            <i class='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- end of navbar header  -->
          <!-- navbar links  --> */}
        <div class='links-container'>
          <div class='nav-links'>
            <a href='#home' class='nav-link scroll-link'>
              Home
            </a>
            <NavLink className='nav-link scroll-link' to='/Jobs' exact>
              Apply
            </NavLink>
            <a href='./diet/pages/signin.html' class='nav-link scroll-link'>
              Login
            </a>
          </div>
        </div>
        {/* <!-- end of nav bar links  -->
          <!-- nav social  --> */}
        <div class='nav-icons'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i class='fab fa-facebook nav-icon'></i>
          </a>

          <a
            href='https://www.twitter.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i class='fab fa-twitter nav-icon'></i>
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel=' noopener noreferrer'
          >
            <i class='fab fa-instagram nav-icon'></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
