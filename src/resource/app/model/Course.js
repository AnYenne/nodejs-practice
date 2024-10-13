const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String,},
    description:{type: String, dafault: 'mo ta san pham'},
    videoid:{type: String, },
    createAt:{type:Date, default: Date.now },
    updateAt:{type:Date, default: Date.now },
})

module.exports = mongoose.model('course', Course)