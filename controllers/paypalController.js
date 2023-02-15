const paypal = require('paypal-rest-sdk');
const cart = require('../models/cart')
class paypalController {
    show(req,res){
        cart.find({user:req.body.user})
        .then(carts=>{
           
            var total =0
            var items=[]
            for(let i=0; i<carts.length;i++){
            items[i]={
                "name": carts[i].name,
                "sku": '00'+(i+1),
                "price": carts[i].price+'.00',
                "currency": "USD",
                "quantity": carts[i].amount
            },
            
                total= total+ carts[i].price*carts[i].amount

            }
            console.log(total)
           
            
            const create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": "http://localhost:3000/succes",
                    "cancel_url": "http://localhost:5000/cancel"
                },
                "transactions": [{
                    "item_list": {
                        "items": items
                    },
                    "amount": {
                        "currency": "USD",
                        "total": total+'.00'
                    },
                    "description": "Iphone 6S cũ giá siêu rẻ"
                }]
        }
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                res.json({message:'fail!!!'})
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                      
                        res.json({link:payment.links[i].href});
                    }
                }
    
            }
        });
        
        })
        

};

}
module.exports = new paypalController