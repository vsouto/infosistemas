const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  Car = require('./api/models/carModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/infosistemas')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const carRoutes = require('./api/routes/carRoutes');
carRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port);
