const {
  updateScore,
  getScoreByUserId,
  createUser,
  getUserById,
  loginUser,
  uploadImageController,
} = require("../controller");
const { default: upload } = require("../middleware/upload");

const router = require("express").Router();

router.put("/score", updateScore);
router.get("/score/:userId", getScoreByUserId);

router.post("/user", createUser);
router.get("/user/:id", getUserById);

router.post("/login", loginUser);
router.post("/upload-image", upload.array("images", 10), uploadImageController);
module.exports = router;
