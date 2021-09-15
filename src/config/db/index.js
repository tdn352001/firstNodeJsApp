const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_educaion_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected')
    } catch (error) {
        console.log('connect Failed')
        console.log(error)
    }
}


module.exports = {connect}