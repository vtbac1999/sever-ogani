const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sanpham = new Schema({
   
    name: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    price:{type:Number, maxLength:255}


})
module.exports = mongoose.model('sanpham',sanpham)