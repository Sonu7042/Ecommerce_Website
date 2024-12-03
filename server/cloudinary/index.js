const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("@fluidjs/multer-cloudinary");

cloudinary.config({
  cloud_name: "dwsdik5f9",
  api_key: "871845915328588",
  api_secret: "AbUEBRsxUbgp0GYnWpW7s0QdCo0",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});


module.exports = storage
