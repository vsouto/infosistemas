import React, { useState } from 'react';
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import carImg from '../assets/car.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Car({ car }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  
  return (
    <li>
      <div className="view">
        <input className="toggle"
               type="checkbox" />
        <label>
          {car.modelo}
        </label>
        <button className="destroy" onClick={() => setOpen(true)}/>
        <Dialog
          fullWidth={true}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={carImg}
                  title={car.modelo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    {car.modelo}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {car.placa}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {car.chassi}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {car.renavam}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {car.ano}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary" autoFocus>
              Thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </li>
  )
}
