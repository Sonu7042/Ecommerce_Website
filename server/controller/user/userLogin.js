require("dotenv").config();
const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Invalid credentials");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User  not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw new Error("Invalid password");
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: 24 * 7 * 60 * 60,
    });

    res.status(200).json({
      message: "Login Successfull",
      error: false,
      success: true,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userLogin;
