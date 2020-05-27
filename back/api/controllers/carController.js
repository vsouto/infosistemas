'use strict';

const mongoose = require('mongoose'),
  Car = mongoose.model('Car');


exports.listAll = function(req, res) {
    Car.find({}, function(err, cars) {

    })
  .then(function(car) {
      res.json(car);
  })
};

exports.create = function(req, res) {

    Car.create(req.body, function(err, car) {
        if (err)
            res.send(err);
        res.json(car);
    })
};

exports.read = async function(req, res) {

    Car.findById(req.params.carId, function(err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
};

exports.update = function(req, res) {

    Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
};

exports.delete = function(req, res) {

    Car.remove({
        _id: req.params.carId
    }, function(err, car) {
        if (err)
            res.send(err);
        res.json({ message: 'Car successfully deleted' });
    });
};
