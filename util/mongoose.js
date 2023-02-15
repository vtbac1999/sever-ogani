module.exports ={
    mutipleMongooseToObject: function (mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function(){
        return mongoose ? mongoose.toObject(): mongoose
    }
}