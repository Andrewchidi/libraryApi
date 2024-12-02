import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: { // Fixed typo
    type: String,
    unique: true,
    required: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    unique: true,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  role: {
    type: String,
    enum: ["guest", "admin"], // Fixed typo
    default: "guest", // Fixed typo
  },
});

const User = mongoose.model("User", userSchema);
export default User;
