const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");

const userSignUpController = async (req, res) => {
  try {

    
    const { name, email, password, profilePic } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      throw new Error("Already Exist");
    }

    if (!name || !email || !password) {
      throw new Error("Enter all fields");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    const payload = {
      name: name,
      email: email,
      password: hashPassword,
      role: "GENERAL",
      profilePic: profilePic,
    };

    const user = await userModel.create(payload);

    res.status(201).json({
      message: "User created successfully",
      error: false,
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignUpController;
