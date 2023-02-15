const cart = require('../models/cart')
const {mutipleMongooseToObject} = require('../util/mongoose')
class showcartController {
    show(req,res,next){
            cart.find({user:req.body.name})
            .then(carts =>{
            res.json({carts,count:carts.length})
            })
            
            .catch(next)
     }
    
    }
    

module.exports = new showcartController