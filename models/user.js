/**
 * The User Model
 * @Author: Khalid Elshafie <abolkog>
 * @Date:   2017-09-28T01:40:54+09:00
 * @Email:  Khalid@abolkog.com
 */



//User Model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true }
});

//Pre Save Hook. Used to hash the password
UserSchema.pre('save', function(next) {

     if (!this.isModified('password'))  {
       return next();
     }

    //Generate Salt Value
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      //Use this salt value to hash password
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });

    });

});

//Custom method to check the password correct when login
UserSchema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
  bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
