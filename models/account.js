const mongoose = require('mongoose')
const Schema = mongoose.Schema
const account = new Schema({
   
    name: {type: String, maxLength: 255},
    password: {type: String, maxLength: 255}


})
module.exports = mongoose.model('account',account)