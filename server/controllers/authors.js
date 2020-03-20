const Author = require("../models/author");

module.exports = {
  index: (req, res) => {
    Author.find()
      .then(authorsInDB => res.json(authorsInDB))
      .catch(err => res.json(err));
  },
  show: (req, res) => {
    console.log("In show controller ", req.params);
    Author.findOne({ _id: req.params.id })
      .then(authorsInDB => res.json(authorsInDB))
      .catch(err => res.json(err));
  },
  create: (req, res) => {
    console.log("In create controller ", req.body);
    const { name } = req.body;
    Author.create({ name })
      .then(authorInDB => res.json(authorInDB))
      .catch(err => res.json(err));
  },
  update: (req, res) => {
    const { name } = req.body;
    Author.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true, runValidators: true }
    )
      .then(authorsInDB => res.json(authorsInDB))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Author.findOneAndDelete({ _id: req.params.id })
      .then(authorsInDB => res.json(authorsInDB))
      .catch(err => res.json(err));
  }
};
