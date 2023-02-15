const order = require('../models/order')
const {mutipleMongooseToObject} = require('../util/mongoose')
class orderController {
    show(req,res,next){
            console.log()
            order.find({user:req.body.user})
            .then(orders =>{
            res.json({orders})
            })
            
            .catch(next)
     }
    
    }
    

module.exports = new orderController