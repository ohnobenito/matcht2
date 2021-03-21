const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function (req, res) {
    db.Likes.find(req.query)
      .then((dbLikes) => res.json(dbLikes))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Likes.findById(req.params.id)
      .then((dbLikes) => res.json(dbLikes))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Likes.create(req.body)
      .then((dbLikes) => res.json(dbLikes))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Likes.findById({ _id: req.params.id })
      .then((dbLikes) => dbLikes.remove())
      .then((dbLikes) => res.json(dbLikes))
      .catch((err) => res.status(422).json(err));
  },
};
