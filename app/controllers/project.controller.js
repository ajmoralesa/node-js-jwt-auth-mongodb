const db = require("../models");
const Project = db.project;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.addproject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    acronym: req.body.acronym,
  });

  project.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Project.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({ message: "Project successfully added" });
    });
  });
};
