const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");
const workoutController = require("../controllers/workoutController");
const mocks = require("node-mocks-http");
const moment = require("moment");

process.env.TEST_SUITE = "shred-test";

test("our First test", () => {});

// describe("getTodaysWorkout", () => {
//   it("should retrieve the current users workout that has a scheduleDate for today", () => {});
// });

// describe("CREATE", () => {
//   let newWorkout;
//   let req = mocks.createRequest();
//   let res = mocks.createResponse();
//   let today = moment()
//     .startOf("day")
//     .format("YYYY-MM-DD");
//   beforeEach(
//     async () => (newWorkout = await workoutController.createWorkout(req, res))
//   );
//   test("can create a workout", async () => {
//     await new Workout({
//       workoutName: "jest test HIIT workout",
//       sections: [],
//       scheduleDate: today
//     });
//     const workout = Workout.findOne({ name: "jest test HIIT workout" });
//     expect(workout.workoutName).toEqual("jest test HIIT workout");
//   });
// });
