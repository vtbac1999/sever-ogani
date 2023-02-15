const mongoose = require('mongoose')
const Schema = mongoose.Schema
const order = new Schema({
    idsp: {type: String, maxLength: 255},
    name: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    price: {type: Number, maxLength: 255},
    amount: {type:Number, maxLength: 255},
    user: {type: String, maxLength: 255}


})
module.exports = mongoose.model('order',order)