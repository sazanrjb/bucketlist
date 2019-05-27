const mongoose = require('mongoose');

const schema = mongoose.schema({
    title: String,
    date: { type: Date },
    is_succeeded: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wish', schema);