const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId,
    postid: mongoose.Schema.Types.ObjectId,
    timestamp: Date
}, { collection: 'Like' });

module.exports = mongoose.model('Like', LikeSchema);