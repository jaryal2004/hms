const mongoose = require("mongoose");
const user = require("./model/user");
const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    const hashed_password = await bcryptjs.hash('admin@123', 8);
    const user_name = 'admin';
    const email = 'payal123@gmail.com';
    const is_admin = true;
    // const ad_user = await user.find({email});
    // if(ad_user){
    //     return console.log("user already exist");
    // }
    const admin_user = await user.create({
    username: user_name,
     password:hashed_password,
     email: email,
      is_admin,
    });
    console.log("admin created", admin_user);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

seed();
