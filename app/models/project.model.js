const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    title: String,
    acronym: String,
    chef: String,
    people: String,
  })
);

module.exports = Project;
