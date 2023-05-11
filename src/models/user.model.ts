import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {String, required: true},
  email: {String, required: true, unique: true},
  password: {String, required: true, minlength: 6},
}, {timestamps: true});



const UserModel  = mongoose.model('User', userSchema);


export default UserModel