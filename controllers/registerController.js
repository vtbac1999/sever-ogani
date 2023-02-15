const account = require('../models/account')
class registerController {
    register(req,res,next){
       
        account.findOne({name:req.body.name})
        .then(accounts => {
           
            if(!accounts){
                try {
                    const Account = new account(req.body)
                    Account.save()
                    res.json({succes:true,message:'succes', account:Account})
                } catch (error) {
                    
                }
            } 
            if(accounts){
                res.json({succes:false,message:'fail!!!'})
            }
        })
       
       
    }
    
    
}
module.exports = new registerController