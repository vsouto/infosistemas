'use strict';
module.exports = function(app) {
  const car = require('../controllers/carController');

  app.route('/car')
    .get(car.listAll)
    .post(car.create);

  app.route('/car/:carId')
    .get(car.read)
    .put(car.update)
    .delete(car.delete);

};
