const userController = require("../controllers/userController");
const User = require("../models/userModel");
const mocks = require("node-mocks-http");
let app = require("../index");
const request = require("supertest");

process.env.TEST_SUITE = "shred-test";

describe("USER", () => {
  let newUser;
  let req = mocks.createRequest();
  let res = mocks.createResponse();
  beforeEach(async () => {
    newUser = await userController.createUser(req, res);
  });
  afterEach(async () => {
    await User.remove({});
  });
  describe("POST /newUser", () => {
    test("can create a user", async () => {
      let response = await new User({
        name: "jestTestName",
        email: "jestTest@test.com",
        password: "testPassword"
      }).save();
      const user = await User.findOne({ name: "jestTestName" });
      expect(user.name).toEqual("jestTestName");
    });
  });
  describe("GET /users", () => {
    it("should get all users ", async () => {
      await User.collection.insertMany([
        { name: "name1", email: "name1@test.com", password: "name1Password" },
        { name: "name2", email: "name2@test.com", password: "name2Password" }
      ]);
      let res = await request(app).get("/users");
      expect(res.status).toBe(200);
      expect(res.body.some(u => u.name === "name1")).toBeTruthy();
      expect(res.body.some(u => u.name === "name2")).toBeTruthy();
    });
  });
});
