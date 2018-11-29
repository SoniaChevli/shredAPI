const exerciseController = require("../controllers/exerciseController");
const sectionController = require("../controllers/sectionController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const workoutController = require("../controllers/workoutController");
const auth = require("../middleware/auth");

module.exports = app => {
  app.route("/newExercise").post(auth, exerciseController.createExercise);
  app.route("/exercises").get(exerciseController.getAllExercises);
  app.route("/exercises/:id").get(exerciseController.getExercise);
  app
    .route("/getExercises/(:exercises)")
    .get(auth, exerciseController.getExercises);
  app.route("/newSection").post(auth, sectionController.createSection);
  app
    .route("/getSections/(:sections)")
    .get(auth, sectionController.getSections);
  app.route("/newWorkout").post(auth, workoutController.createWorkout);
  app.route("/todaysWorkout").get(auth, workoutController.getTodaysWorkout);
  app.route("/getAllWorkouts").get(auth, workoutController.getAllWorkouts);
  app.route("/newUser").post(userController.createUser);
  app.route("/users").get(userController.getUsers);
  app.route("/userLogin").post(authController.userAuth);
  app.route("/auth/google").post(authController.googleAuth);
};
