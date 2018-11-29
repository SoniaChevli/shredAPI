const Workout = require("../models/workoutModel");
const moment = require("moment");

module.exports = {
  createWorkout: async (req, res) => {
    const { workoutName, sections, scheduleDate } = req.body;
    const author = req.user;

    const newWorkout = new Workout({
      workoutName,
      sections,
      scheduleDate,
      author
    });
    try {
      let workout = await newWorkout.save();
      res.send(workout._id);
    } catch (err) {
      res
        .status(404)
        .send(
          "There was an issue creating this workout. Please Try again Later."
        );
    }
  },
  getTodaysWorkout: async (req, res) => {
    const author = req.user;
    let today = moment()
      .startOf("day")
      .format("YYYY-MM-DD");
    // console.log("today", today);
    try {
      let result = await Workout.find({
        $and: [{ scheduleDate: today }, { author: author }]
      });
      res.send(result);
    } catch (err) {
      console.log("error getting todays result", err);
    }
  },
  getAllWorkouts: async (req, res) => {
    const author = req.user;
    try {
      let result = await Workout.find({ author: author }).sort("scheduleDate");

      res.send(result);
    } catch (err) {
      console.log("error getting workouts ", err);
    }
  }
};
