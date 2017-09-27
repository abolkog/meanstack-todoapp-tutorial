//User Model
const mongoose = require('mongoose');

// Schema Definition
const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
