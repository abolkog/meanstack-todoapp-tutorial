const express = require('express');
const router = express.Router();
const User = require('../models/user.js')


//Login
router.get('/auth', (req, res, next) => {
  res.send('I am Login');
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
