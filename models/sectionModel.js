const mongoose = require("mongoose");

const workoutSectionSchema = new mongoose.Schema({
  exercises: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  restAfterSets: Number,
  author: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    email: { type: String },
    name: { type: String }
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("WorkoutSection", workoutSectionSchema);
