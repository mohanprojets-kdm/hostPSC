const mongoose = require("mongoose");
const { SCORE_TAGS_ENUM, SCORE_TAG } = require("../../shared/static");

const scoreSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      default: 1000,
      required: true,
      min: [0, "Score cannot be below 0"],
      max: [2000, "Score cannot exceed 2000"],
    },
    tag: {
      type: String,
      enum: SCORE_TAGS_ENUM,
      default: SCORE_TAG.BASE_BEAST,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);
module.exports = mongoose.model("Score", scoreSchema);
