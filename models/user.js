const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    fullname: String,
    bio: String,
    profilepicurl: String,
    numfriends: Number,
    numgroups: Number
}, { collection: 'User' });

module.exports = mongoose.model('User', UserSchema);
