const mongoose = require('mongoose');
const { Schema } = mongoose;
const Signups = new Schema({
	date: Date,
	userName: String,
	ip: String,
	type: String,
	email: String
});

module.exports = mongoose.model('Signups', Signups);
