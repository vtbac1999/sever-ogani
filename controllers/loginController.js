const account = require('../models/account')
class loginController {
    login(req,res,next){
       
        account.findOne({name:req.body.Username})
        .then(accounts => {
            if(accounts.name != req.body.Username || accounts.password != req.body.Password ){
            console.log('sai tk hoac mk')
            res.json({succes:false, message:'fail!!!'})} 
            if(accounts.name == req.body.Username && accounts.password == req.body.Password){
                res.json({succes:true , message:'succes!!!'})
                
            }
        })
       
       
    }
    
    
}
module.exports = new loginController