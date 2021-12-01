const {Schema, model} = require('mongoose');

const schema = new Schema({
    username: {type: String, require: true},
    birthDate: {type: Date},
    email: {type: String, require: true, unique: true},
    phone: {type: String},
    passport: {type: String, unique: true},
    passportDate: {type: Date},
    passportWhoGave: {type: String},
    passportOfficeNumber: {type: String},
    drivingLicence: {type: String, unique: true},
    drivingLicenceDate: {type: Date},
    password: {type: String, require: true}
})

module.exports = model("User", schema)