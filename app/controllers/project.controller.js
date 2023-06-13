const db = require("../models");
const Project = db.project;

exports.addproject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    acronym: req.body.acronym,
    chef: req.body.chef,
    people: req.body.people,
  });

  project.save((err, project) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    project.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({ message: "Project successfully added" });
    });
  });
};
