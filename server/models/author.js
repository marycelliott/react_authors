const mongoose = require("mongoose");

// BLUEPRINT
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minlength: [2, "Name must be at least 2 characters long."]
    }
  },
  { timestamps: true }
);

// INSTANCE OF PRODUCT - name of model and the blueprint that goes with it
const Author = mongoose.model("Author", AuthorSchema);
// exporting the model
module.exports = Author;
