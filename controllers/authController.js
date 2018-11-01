const User = require("../models/userModel");
const googleValidate = require("../validate/googleVerification");
const { userAuthValidate } = require("../validate/userValidator");
const bcrypt = require("bcrypt");

module.exports = {
  userAuth: async (req, res) => {
    const { error } = userAuthValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    const token = user.generateAuthToken();
    res.send(token);
  },

  googleAuth: async (req, res) => {
    let response = await googleValidate(req.body.token);
    if (!response) {
      return res
        .status(400)
        .send("Sorry, we could not verify your google Acount.");
    }

    let user = await User.findOne({ email: response.email });

    if (!user) {
      user = new User({
        name: response.name,
        email: response.email,
        profilePhoto: response.picture
      });
    }

    await user.save();
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      token
    });
  }
};
