const {Schema, model} = require('mongoose');

const selfieSchema = new Schema({
    path: {type: String, require: true},
    //user: {type: String, require: true}
})

module.exports = model("Selfie", selfieSchema)