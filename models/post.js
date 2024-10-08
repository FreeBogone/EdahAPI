const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId,
    contents: String,
    type: String,
    timestamp: Date,
    username: String
}, { collection: 'Post' });

module.exports = mongoose.model('Post', PostSchema);