const exerciseController = require("../controllers/exerciseController");
const sectionController = require("../controllers/sectionController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

module.exports = app => {
  app.route("/newExercise").post(auth, exerciseController.createExercise);
  app.route("/exercises").get(exerciseController.getAllExercises);
  app.route("/exercises/:id").get(exerciseController.getExercise);
  app.route("/newSection").post(auth, sectionController.createSection);
  app.route("/newUser").post(userController.createUser);
  app.route("/users").get(userController.getUsers);
  app.route("/userLogin").post(authController.userAuth);
  app.route("/auth/google").post(authController.googleAuth);
};
