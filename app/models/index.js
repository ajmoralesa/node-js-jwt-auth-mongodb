const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.project = require("./project.model");
db.mat = require("./mat.model");

db.ROLES = ["user", "admin", "projectManager"];

module.exports = db;
