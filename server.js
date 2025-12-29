const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://rootuthala:rootuthala@cluster0.xhwsi67.mongodb.net/psscore?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
