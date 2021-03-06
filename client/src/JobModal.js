import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './App.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function JobModal({ job, handleClose, open }) {
  if (!job.title) {
    return <div></div>;
  }

  return (
    <div className='modal'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          <div className='text_black'>
            {job.title} -{job.company}
          </div>
          <img className='detailed-logo' src={job.company_logo} alt='Logo' />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id='alert-dialog-slide-description'
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
          <a target='_blank' rel=' noopener noreferrer' href={job.url}>
            <Button color='primary'>Apply</Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
