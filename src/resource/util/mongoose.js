module.exports = {
    mutileMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    convertoObject: function(mongoose){
        return mongoose.toObject()
    }
    
}