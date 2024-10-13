const mongoose = require('mongoose');

async function connect (){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/eduction_db')
        console.log("connected")     
    } catch (error) {
        console.log("connect failure")
    }

}
module.exports = {connect}