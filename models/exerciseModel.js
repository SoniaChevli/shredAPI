const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exerciseDescription: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  },
  activeTime: String,
  repitions: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema);
