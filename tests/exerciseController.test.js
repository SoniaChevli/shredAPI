const mongoose = require("mongoose");
const exerciseController = require("../controllers/exerciseController");
const Exercise = require("../models/exerciseModel");
const mocks = require("node-mocks-http");
const User = require("../models/userModel");
const request = require("supertest");
process.env.TEST_SUITE = "shred-test";
let app = require("../index");
describe("Exercise", () => {
  test("our First test", () => {});
  describe("POST /newExercise", () => {
    beforeEach(() => {
      jest.setTimeout(10000);
    });

    it("should return a 401 if client is not logged in", async () => {
      const res = await request(app)
        .post("/newExercise")
        .send({
          exerciseDescription: "test exercise description",
          repitions: 12
        });
      expect(res.status).toBe(401);
    });

    // it("should return a 200 exercise successfully created", async () => {
    //   await new User({
    //     name: "jestTestNameSoniaExercise123",
    //     email: "jestTestExercise123@test.com",
    //     password: "testPasswordExercise123"
    //   }).save();
    //   const user = await User.findOne({ name: "jestTestNameSoniaExercise123" });
    //   let token = user.generateAuthToken();

    //   let response = request(app)
    //     .post("/newExercise")
    //     .set("x-auth-token", token)
    //     .send({
    //       exerciseDescription: "test exercise description",
    //       repitions: 12
    //     });
    //   expect(response.status).toBe(200);
    // });

    // it("should create multiple exercises at once", async () => {
    //   const token = new User().generateAuthToken();
    //   const res = await request(app)
    //     .post("/newExercise")
    //     .set("x-auth-token", token)
    //     .send([
    //       {
    //         exerciseDescription: "jumping jacks",
    //         repitions: 12
    //       },
    //       { exerciseDescription: "squats", repitions: 12 },
    //       { exerciseDescription: "pushups", repitions: 20 }
    //     ]);
    //   expect(res.status).toBe(200);
    // });
  });
  describe("GET /exercises", () => {});
  describe("GET /exercises/:id", () => {});
  describe("GET /getExercises/(:exercises)", () => {});
});
// });
