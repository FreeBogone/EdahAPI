const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId,
    postid: mongoose.Schema.Types.ObjectId,
    contents: String,
    timestamp: Date
}, { collection: 'Comment' });

module.exports = mongoose.model('Comment', CommentSchema);