import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
  try {
    console.log("Middleware called");

    let token;

    console.log("Authorization Header:", req.headers.authorization);

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      console.log("Token:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded:", decoded);

      const user = await User.findById(decoded.id);

      console.log("User from DB:", user);

      req.user = user;

      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "No token",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default protect;
