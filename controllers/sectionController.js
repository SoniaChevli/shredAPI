const Section = require("../models/sectionModel");

module.exports = {
  createSection: async (req, res) => {
    const { exercises, restAfterSets } = req.body;
    const author = req.user;

    const newSection = new Section({
      exercises,
      restAfterSets,
      author
    });
    console.log("NEW SECTION", newSection);
    try {
      let section = await newSection.save();
      console.log("section id", section._id);
      res.send(section._id);
    } catch (err) {
      res
        .status(404)
        .send(
          "There was an issue creating the exercise. Please Try again Later."
        );
    }
  }
};
