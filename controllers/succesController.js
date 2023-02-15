const paypal = require('paypal-rest-sdk');
const cart = require('../models/cart')
const order = require('../models/order')
class succesController {
    show(req,res){
        const PayerId = req.body.PayerID;
        const paymentId = req.body.paymentId;
        var total=0
       
        cart.find({user:req.body.user})
        .then(carts=>{
            
            for(let i=0; i<carts.length;i++){
                try {
                    const Order = new order({name:carts[i].name,
                                            image:carts[i].image,
                                            price:carts[i].price,
                                            amount:carts[i].amount,
                                            user:carts[i].user})
                    Order.save()
                    cart.deleteMany({user:req.body.user},()=> {}) 
                
                } catch (error) {
                    
                }
                total= total+ carts[i].price*carts[i].amount
            }
           
          const execute_payment_json = {
            "payer_id": PayerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": total+'.00'
                }
            }]
        };
       
        paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                res.json({payment:payment.transactions[0].item_list})   
            }
        });})
    }
}
module.exports = new succesController