import React from 'react'
import Footer from './Footer'
import CarsContainer from '../containers/Cars'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Alert from '@material-ui/lab/Alert';

export default function MainSection(){

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="main">
    <span>
      <Alert severity="info">
        This is app is brought to you by <b>Victor Souto</b>
        <br />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          App Ecosystem Info
        </Button>
      </Alert>

      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{"Victor's InfoSistemas React App"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This App was made for Infosistemas by:
          <Alert severity="info">
            <b>Victor Souto</b>
            <br />
            <h6>souto.victor@gmail.com</h6>
          </Alert>
          <br />
          With the following tools:
          <ul>
            <li>nodejs</li>
            <li>mongodb</li>
            <li>react</li>
            <li>redux</li>
            <li>material-ui</li>
            <li>material-ui-lab</li>
            <li>reselect</li>
            <li>react-promise-tracker</li>
            <li>react-loader-spinner</li>
            <li>git</li>
            <li>github</li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Thanks
        </Button>
      </DialogActions>
    </Dialog>
    </span>
      <CarsContainer />
      <Footer />
    </section>
  )
}
