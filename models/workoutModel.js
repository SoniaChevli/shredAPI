const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  },
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "WorkoutSection" }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  scheduleDate: { type: Date }
});

module.exports = mongoose.model("Workout", workoutSchema);
