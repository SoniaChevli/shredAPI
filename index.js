const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }, { extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost/shred")
  .then(() => console.log("Connected to shred DB!"))
  .catch(err =>
    console.log("There was an error connecting to the shred DB...", err)
  );

const routes = require("./routes/routes");
routes(app);
if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 5000;
  const server = app.listen(port, () =>
    console.log(`Listening on port ${port}`)
  );
}
module.exports = app;
