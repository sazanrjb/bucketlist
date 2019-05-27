const mongoose = require('mongoose');

const schema = mongoose.schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', schema);