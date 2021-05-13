import Typography from '@material-ui/core/Typography';
import Job from './Job';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useState } from 'react';
import JobModal from './JobModal';
import Navbar from './Navbar';
import './App.css';

export default function Jobs({ jobs }) {
  // Modal
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Pagination

  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);

  const [activeStep, setActiveStep] = useState(0);
  const [selectedJob, setSelectedJob] = useState({});
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Navbar />
      <div className='jobs-container'>
        <div className='jobs'>
          <JobModal open={open} job={selectedJob} handleClose={handleClose} />
          <Typography variant='h4' component='h1'>
            Entry Level Software Jobs
          </Typography>
          <Typography variant='h6' component='h2'>
            Found {numJobs} Jobs.
          </Typography>
          {jobsOnPage.map((job, i) => (
            <Job
              key={i}
              job={job}
              onClick={() => {
                handleClickOpen();
                setSelectedJob(job);
              }}
            />
          ))}
          <div>
            Page {activeStep + 1} of {numPages}
          </div>
          <MobileStepper
            variant='progress'
            steps={numPages}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === numPages - 1}
              >
                Next
                {<KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {<KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
}
