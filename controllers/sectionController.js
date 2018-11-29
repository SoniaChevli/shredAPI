const Section = require("../models/sectionModel");

module.exports = {
  createSection: async (req, res) => {
    const { exercises, restAfterSets, numberOfSets } = req.body;
    const author = req.user;

    const newSection = new Section({
      exercises,
      numberOfSets,
      restAfterSets,
      author
    });
    console.log("NEW SECTION", newSection);
    try {
      let section = await newSection.save();

      res.send(section._id);
    } catch (err) {
      res
        .status(404)
        .send(
          "There was an issue creating the exercise. Please Try again Later."
        );
    }
  },
  getSections: async (req, res) => {
    // getting an array of ids, I want to send back an array of objects
    let sections = req.params;
    sections = sections["sections"].split(",");
    let final = [];
    console.log("SECTIONS ARRAY", sections);
    for (let i = 0; i < sections.length; i++) {
      try {
        let result = await Section.findById(sections[i]);
        final.push(result);
        console.log("SECTION RESULT", result);
      } catch (err) {
        console.log("SECTION ERROR", err);
      }
    }
    res.send(final);
  }
};
