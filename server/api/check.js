'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CheckSchema =new Schema ({
     check : Array,
});

const Check = mongoose.model('Check',CheckSchema);

module.exports = Check;