const cart = require('../models/cart')
class cartController {
    show(req,res,next){
       
       cart.find({name:req.body.name , user:req.body.user})
       .then(carts=>{
        if(carts.length==0)
        try {
           
            const Cart = new cart(req.body)
            Cart.save()
            res.json({message:'succes', cart:Cart})
        } catch (error) {
            
        }
        if(carts.length!=0){
            if(carts[0].name != req.body.name)
        try {
            const Cart = new cart(req.body)
            Cart.save()
            res.json({message:'succes', cart:Cart})
        } catch (error) {
            
        }
        }
        if(carts.length!=0){
            if(carts[0].name == req.body.name)
            {    console.log(req.body.name)
                console.log(carts[0].name)
                cart.updateOne(
                    { name:req.body.name, user:req.body.user},
                    {amount:carts[0].amount+1 },()=>{})
        }}
    })
     }
    
    }
    

module.exports = new cartController