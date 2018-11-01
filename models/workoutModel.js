const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  },
  section: [Schema.Types.ObjectId],
  author: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    userName: { type: String }
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.Schema("Workout", workoutSchema);
