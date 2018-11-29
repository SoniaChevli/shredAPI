const mongoose = require("mongoose");

const workoutSectionSchema = new mongoose.Schema({
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercises" }],
  numberOfSets: Number,
  restAfterSets: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkoutSection"
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("WorkoutSection", workoutSectionSchema);
