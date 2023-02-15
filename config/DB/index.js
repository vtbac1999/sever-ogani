const mongoose = require('mongoose')

async function connect (){
  try{  await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        console.log('ket noi db thanh cong')
}
        catch(error){
            console.log('ket noi db that bai')
        }    
}

   


module.exports = {connect}