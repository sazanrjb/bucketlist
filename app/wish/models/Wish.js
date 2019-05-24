const mongoose = require('mongoose');

const schema = mongoose.schema({
    id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    date: { type: Date },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wish', schema);