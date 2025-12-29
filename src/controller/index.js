const uploadToCloudinary =
  require("../service/cloudinaryService").uploadToCloudinary;

const User = require("../model/userSchema");
const Score = require("../model/scoreSchema");
const {
  SCORE_TAG,
  generateObjectId,
  SCORE_TAG_FEMALE,
  SCORE_TAG_MALE,
  SCORES,
} = require("../../shared/static");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    // Validate input
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = new User({
      name,
      email,
      password,
      image:
        gender === "MALE"
          ? SCORE_TAG_MALE.BASE_BEAST
          : SCORE_TAG_FEMALE.BASE_BEAST,
      gender,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      const payload = {
        userId: savedUser._id,
        score: 1000,
        tag: SCORE_TAG.BASE_BEAST,
      };
      const saveScore = new Score(payload);
      await saveScore.save();
    }
    res
      .status(201)
      .json({ user: savedUser, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error, message: "Internal server error" });
  }
};

exports.updateScore = async (req, res) => {
  try {
    const { userId, score } = req.body;
    if (!userId || score === undefined) {
      return res
        .status(400)
        .json({ message: "userId, score and tag are required" });
    }
    if (parseInt(score) < 0 || parseInt(score) > 2000) {
      return res
        .status(400)
        .json({ message: "score must be between 0 and 2000" });
    }

    function getScoreTag(score) {
      const thresholds = Object.keys(SCORES)
        .map(Number)
        .sort((a, b) => a - b);
      let left = 0;
      let right = thresholds.length - 1;
      let result = thresholds[0];

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (thresholds[mid] <= score) {
          result = thresholds[mid]; // candidate
          left = mid + 1; // search right half
        } else {
          right = mid - 1; // search left half
        }
      }

      return SCORES[result];
    }

    const tag = getScoreTag(parseInt(score));

    const updateScore = await Score.findOneAndUpdate(
      { userId },
      { score, tag },
      { new: true }
    );

    const updateUser = await User.findOneAndUpdate(
      {
        _id: generateObjectId(userId),
      },
      {
        image: SCORE_TAG_MALE[tag],
      }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!updateScore) {
      return res
        .status(404)
        .json({ message: "Score record not found for the user" });
    }
    res
      .status(200)
      .json({ score: updateScore, message: "Score updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: error.message || "Internal server error" });
  }
};

exports.getScoreByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const scoreRecord = await Score.findOne({
      userId: userId,
    });
    if (!scoreRecord) {
      return res
        .status(404)
        .json({ message: "Score record not found for the user" });
    }
    res
      .status(200)
      .json({ score: scoreRecord, message: "Score retrieved successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: error.message || "Internal server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const userRecord = await User.findById({ _id: generateObjectId(userId) });
    if (!userRecord) {
      return res.status(404).json({ message: "User record not found" });
    }
    res
      .status(200)
      .json({ user: userRecord, message: "User retrieved successfully" });
  } catch (error) {
    res.status(500).json({ error, message: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const userRecord = await User.findOne({ email, password });
    if (!userRecord) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ user: userRecord, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error, message: "Internal server error" });
  }
};

exports.uploadImageController = async (req, res) => {
  try {
    console.log("File received:", req.file, req.files);
    if (!req.files) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const results = await Promise.all(
      req.files.map(async (file) => {
        return await uploadToCloudinary(file.path, "my-app");
      })
    );
    if (!results || results.length === 0) {
      return res.status(500).json({ message: "Image upload failed" });
    }

    return res.status(200).json({
      message: "Image uploaded successfully",
      url: results && results.map((result) => result.url),
      public_id: results && results.map((result) => result.public_id),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Image upload failed" });
  }
};
