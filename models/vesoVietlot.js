const mongoose = require('mongoose');

var vesoVietlotSchema = new mongoose.Schema({
    so1: Number,
    so2: Number,
    so3: Number,
    so4: Number,
    so5: Number,
    so6: Number
});

module.exports = mongoose.model("vesoVietlot", vesoVietlotSchema);
