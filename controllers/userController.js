const User = require("../models/userModel");
const { userValidate } = require("../validate/userValidator");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (req, res) => {
    const { error } = userValidate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      user
    });
  },

  getUsers: async (req, res) => {
    const user = await User.find();
    res.send(user);
  }
};
