const express = require("express");
const Course = require("../models/Course");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Create a new course (Admin Only)
router.post("/", protect, admin, async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    const course = new Course({ title, description, category, price });
    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Get a single course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor", "name email");
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Update a course (Protected - Only Instructor OR Admin)
router.put("/:id", protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Ensure only the instructor or admin can update the course
    if (!req.user.isAdmin && course.instructor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Update fields
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.category = req.body.category || course.category;
    course.price = req.body.price || course.price;

    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Delete a course (Protected - Only Instructor OR Admin)
router.delete("/:id", protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Ensure only the instructor or admin can delete the course
    if (!req.user.isAdmin && course.instructor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await course.deleteOne();
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Enroll a user in a course
router.post("/:id/enroll", protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if already enrolled
    if (user.enrolledCourses.includes(course._id)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    user.enrolledCourses.push(course._id);
    await user.save();

    res.json({ message: "Enrollment successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
