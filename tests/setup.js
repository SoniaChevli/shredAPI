const mongoose = require("mongoose");

const exercise = require("../models/exerciseModel");
const WorkoutSection = require("../models/sectionModel");
const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

beforeEach(function(done) {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    return done();
  }
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(
      `mongodb://localhost/${process.env.TEST_SUITE}`,

      async function(err) {
        if (err) {
          throw err;
        }

        return clearDB();
      }
    );
  } else {
    return clearDB();
  }
});
afterEach(function(done) {
  mongoose.disconnect();
  return done();
});

afterAll(done => {
  return done();
});
