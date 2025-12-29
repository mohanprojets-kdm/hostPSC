// services/cloudinaryService.js

const { default: cloudinary } = require("../config/coloudinary");

exports.uploadToCloudinary = async (filePath, folder = "uploads") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto", // supports image, video, pdf etc.
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload to Cloudinary");
  }
};
