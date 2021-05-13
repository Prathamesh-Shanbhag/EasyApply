import './home.css';
import { NavLink } from 'react-router-dom';
import videos from './assets/vid.mp4';
import Typing from './Typing.js';
import Navbar from './Navbar';
export default function Home() {
  return (
    <header id='home'>
      <Navbar />
      {/* <!-- hero video  -->  */}
      <video id='videoBG' autoPlay muted loop>
        <source src={videos} type='video/mp4' />
      </video>
      {/* <!-- end of hero video  -->  */}
      <div class='hero'>
        <div class='hero-banner'>
          <h1 class='hero-title'>
            Achieve
            <span>&nbsp;</span>
            <Typing className='typing' />
          </h1>
          {/* <p class='hero-text'></p> */}
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
