import { Typography } from '@material-ui/core';
import './App.css';
import './home.css';
export default function Job({ job, onClick }) {
  return (
    <section class='section services clearfix' id='services'>
      <div class='section-center services-center'>
        <article onClick={onClick} className={'job services-card'}>
          <div class='services-box'>
            <div class='card-content'>
              <h6 class='card-title'>{job.title}</h6>
              <div>
                <Typography variant='h5'>{job.company}</Typography>
              </div>
              <div>
                <Typography>
                  <div className='text_white'>
                    <Typography>{job.location}</Typography>
                    {job.created_at.split(' ').slice(0, 3).join(' ')}
                  </div>
                </Typography>
                <a class='card-btn' href='public/index.html'>
                  See Description
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
