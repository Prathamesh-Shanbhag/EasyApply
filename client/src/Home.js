import './home.css';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <header id='home'>
      {/* <!-- <<<<<<navbar>>>>>> --> */}
      <nav class='navbar' id='nav'>
        <div class='nav-center'>
          {/* <!-- nav header  --> */}
          <div class='nav-header'>
            <a href='#home'>
              <img
                src='./assets/images/logo.svg'
                alt='Fitgeneixlogo'
                class='nav-logo'
              />
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
              <a href='./diet/pages/mainpage.html' class='nav-link scroll-link'>
                Diet
              </a>
              <a href='./store.html' class='nav-link scroll-link'>
                Store
              </a>
              <a href='./diet/pages/signin.html' class='nav-link scroll-link'>
                Login
              </a>
            </div>
          </div>
          {/* <!-- end of nav bar links  -->
          <!-- nav social  --> */}
          <div class='nav-icons'>
            <a href='https://www.facebook.com' target='_blank'>
              <i class='fab fa-facebook nav-icon'></i>
            </a>

            <a href='https://www.twitter.com' target='_blank'>
              <i class='fab fa-twitter nav-icon'></i>
            </a>

            <a href='https://www.instagram.com' target='_blank'>
              <i class='fab fa-instagram nav-icon'></i>
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- hero video  -->  */}
      <video id='videoBG' autoplay muted loop>
        <source src='./assets/hero-component.mp4' type='video/mp4' />
      </video>
      {/* <!-- end of hero video  -->  */}
      <div class='hero'>
        <div class='hero-banner'>
          <h1 class='hero-title'>
            Achieve <span class='typed-text'></span>
            <span class='cursor typing'>&nbsp;</span>
          </h1>
          <p class='hero-text'></p>
          <NavLink
            className='btn-white scroll-link'
            activeClassName='is-active'
            to='/Jobs'
            exact
          >
            Explore Jobs
          </NavLink>
        </div>
      </div>
    </header>
  );
}
