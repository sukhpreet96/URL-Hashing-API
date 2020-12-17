const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    dayte: { type: String, default: Date.now }
})

module.exports = Url = mongoose.model('Url', urlSchema);
