const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });


const createToken = (UserId) => {
return jwt.sign({ UserId: User._id}, process.env.ST_KEY);

};

const loginWith = async (req, res) => {
  const { username, email } = req.body;

  try {
    let user = await User.findOne({ email });

    // If user doesn't exist, create one
    if (!user) {
      user = new User({ username, email });
      await user.save();
    }

    // Generate token
    const token = createToken(user._id);

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = loginWith;
