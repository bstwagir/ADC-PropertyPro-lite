import cloudinary from 'cloudinary'.v2;
import {} from 'dotenv/config';


const {cloud_name,api_key,api_secret,} = process.env
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});


cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
