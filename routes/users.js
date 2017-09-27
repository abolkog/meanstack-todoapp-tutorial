/**
 * Users Routes
 * @Author: Khalid Elshafie <abolkog>
 * @Date:   2017-09-28T01:40:28+09:00
 * @Email:  Khalid@abolkog.com
 */



const express = require('express');
const router = express.Router();
const User = require('../models/user.js')


//Login
router.post('/auth', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = { email}
  //Check the user exists
  User.findOne(query, (err, user) => {
    //Error during exuting the query
    if (err) {
      return res.send({
        success: false,
        message: 'Error, please try again'
      });
    }

    //No User match the search condition
    if (!user) {
      return res.send({
        success: false,
        message: 'Error, Account not found'
      });
    }

    //Check if the password is correct
    user.isPasswordMatch(password, user.password, (err, isMatch) => {

        //Invalid password
        if (!isMatch) {
          return res.send({
            success: false,
            message: 'Error, Invalid Password'
          });
        }

        //User is Valid
        //This object is just used to remove the password from the retuned fields
        let returnUser = {
          name: user.name,
          email: user.email,
          id: user._id
        }

        //Send the response back
        return res.send({
          success: true,
          message: 'You can login now',
          user: returnUser
        });
    });

  });

});

//Registeration
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Failed to save the user'
      });
    }
    res.send({
      success: true,
      message: 'User Saved',
      user
    });
  });
});

module.exports = router;
