const express = require('express');
require('dotenv').config();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = new express.Router();
router.post('/registerUser', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.REACT_APP_APIKEY)
    user.token = token;
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send('false');
  }
});
router.post('/loginUser', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = jwt.sign({ _id: user._id }, process.env.REACT_APP_APIKEY)
    if (user) {
      user.token = token;
      await user.save();
      res.status(201).send({ user, token });
    }
  } catch (e) {
    res.status(400).send('false');
  }
});
module.exports = router;


//process.env.KEY