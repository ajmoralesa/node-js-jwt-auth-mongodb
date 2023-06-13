const db = require("../models");
const Mat = db.mat;

exports.addmat = (req, res) => {
  const mat = new Mat({
    name: req.body.name,
  });

  mat.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Mat created!" });
  });
};
