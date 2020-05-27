'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarModelSchema = new Schema({
    placa: {
        type: String,
        required: 'Favor informar a placa'
    },
    chassi: {
        type: String,
        required: false
    },
    renavam: {
        type: String,
        required: false
    },
    modelo: {
        type: String,
        required: 'Favor informar o modelo'
    },
    marca: {
        type: String,
        required: false
    },
    ano: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Car', CarModelSchema);
