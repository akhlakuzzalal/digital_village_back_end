const cloudinary = require('cloudinary').v2;

// Change cloud name, API Key, and API Secret below

cloudinary.config({
  cloud_name: 'randomone',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

function deleteFile(public_id) {
  console.log(public_id);
  cloudinary.uploader.destroy(public_id, function (result) {
    console.log(result);
  });
}

module.exports = deleteFile;
