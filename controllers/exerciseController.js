const Excercise = require("../models/exerciseModel");

module.exports = {
  createExercise: async (req, res) => {
    let finalExercises = [];

    for (let i = 0; i < req.body.length; i++) {
      if (Object.keys(req.body[i]).length === 0) continue;
      const { exerciseDescription, activeTime, repitions } = req.body[i];
      const newExercise = new Excercise({
        exerciseDescription,
        activeTime,
        repitions
      });
      try {
        let exercise = await newExercise.save();
        finalExercises.push(exercise.id);
      } catch (err) {
        res
          .status(404)
          .send(
            "There was an issue creating the exercise. Please Try again Later."
          );
      }
    }
    res.send(finalExercises);
  },

  getAllExercises: async (req, res) => {
    const exercises = await Excercise.find().sort({ created_at: -1 });
    res.send(exercises);
  },
  getExercise: async (req, res) => {
    let excercise = await Excercise.findById(req.params.id);
    if (!excercise)
      return res
        .status(404)
        .send("The exercise with the given ID was not found.");
    res.send(excercise);
  }
};
