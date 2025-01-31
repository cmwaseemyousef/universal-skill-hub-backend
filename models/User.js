const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Enrolled courses
    isAdmin: { type: Boolean, default: false }  // Admin role
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
