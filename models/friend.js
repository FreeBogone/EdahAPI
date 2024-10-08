const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid1: mongoose.Schema.Types.ObjectId,
    userid2: mongoose.Schema.Types.ObjectId,
    timestamp: Date
}, { collection: 'Friends' });

module.exports = mongoose.model('Friend', FriendSchema);