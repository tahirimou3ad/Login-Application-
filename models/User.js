const mongoose = require('mongoose');

const userRegistrationSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const userLoginSchema = mongoose.Schema({
    email : String,
    password : String
});

module.exports = mongoose.model('Registrations', userRegistrationSchema);
module.exports = mongoose.model('Logins', userLoginSchema);