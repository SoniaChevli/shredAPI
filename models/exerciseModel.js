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

module.exports = mongoose.model("Exercise", exerciseSchema);