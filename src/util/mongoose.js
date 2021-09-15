module.exports = {
    multipleMongooseToObject(mongooseArray) {
        return mongooseArray.map(mongooseobject => mongooseobject.toObject());
    },
    MongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}