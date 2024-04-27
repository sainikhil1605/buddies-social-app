const jwt = require("jsonwebtoken");

const generateToken = (user: any) => {
  return jwt.sign(
    { userId: user.id, username: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

module.exports = { generateToken };
