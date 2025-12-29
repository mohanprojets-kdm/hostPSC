const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    gender: { type: String },
    createdAt: {
      type: Date,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
