var mongoose = require('mongoose');
var UserSchema = require('./UserSchema')

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    score: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;