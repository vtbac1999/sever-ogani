const sanpham = require('../models/sanpham')
class shopdetailController {
    showshop(req,res){
       sanpham.find({_id:req.body.id})
       .then(sanphams=>{
        res.json({sanphams})
       })
    }
}
module.exports = new shopdetailController