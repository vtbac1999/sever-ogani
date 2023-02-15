const cart = require('../models/cart')
const sanpham = require('../models/sanpham')

const {mutipleMongooseToObject} = require('../util/mongoose')
class homeController {
    
    show(req,res,next){
      
       sanpham.find({})
       
       .then(sanphams =>{
        cart.find({user:req.body.name})
        .then(carts=>{
       res.json({sanphams,count:carts.length})
       })})
     
       .catch(next)
    }
   
}
module.exports = new homeController