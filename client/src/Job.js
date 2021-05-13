import { Typography } from '@material-ui/core';
import './App.css';
import './home.css';
export default function Job({ job, onClick }) {
  return (
    // <div class="services-box">
    //   <div class="card-content">
    //     <h3 class="card-title">Look For A Part</h3>
    //     <form>
    //       <h5>VIN</h5>
    //       <input class="register_info" type="text" placeholder="VIN" />

    //       <h5>Car part type</h5>
    //       <input class="register_info" type="text" placeholder="Car part type" />

    //     </form>
    //     <a class="card-btn" href="public/index.html">Search</a>
    //   </div>
    <section class='section services clearfix' id='services'>
      <div class='section-center services-center'>
        <article onClick={onClick} className={'job services-card'}>
          <div class='services-box'>
            <div class='card-content'>
              <h6 class='card-title'>{job.title}</h6>
              <h5 className='register_info'>{job.company}</h5>
              <div>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography>{job.location}</Typography>
              </div>
              <div>
                <Typography>
                  {job.created_at.split(' ').slice(0, 3).join(' ')}
                </Typography>
                <a class='card-btn' href='public/index.html'>
                  Search
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
