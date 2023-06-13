const controller = require("../controllers/mat.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header();
    next();
  });

  app.post("/api/addmat", controller.addmat);
};
