const request = require("supertest");
const User = require("../models/userModel");
let app = require("../index");
process.env.TEST_SUITE = "shred-test";
describe("auth Controller", () => {
  let token;

  const exec = () => {
    return request(app)
      .post("/newExercise")
      .set("x-auth-token", token)
      .send({
        exerciseDescription: "test exercise description",
        repitions: 12
      });
  };

  it("should return 401 if no token is provided", async () => {
    token = null;
    const res = await request(app)
      .post("/newExercise")
      .send({
        exerciseDescription: "test exercise description",
        repitions: 12
      });
    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "notRealToken";
    const res = await exec();
    expect(res.status).toBe(400);
  });

  it("should return 200 if token is valid", async () => {
    let response = await new User({
      name: "jestTestName",
      email: "jestTest@test.com",
      password: "testPassword"
    }).save();
    const user = await User.findOne({ name: "jestTestName" });
    token = user.generateAuthToken();

    const res = await exec();
    expect(res.status).toBe(200);
  });
});
