import mongoose from "mongoose";

const user=new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      profilePicture: {
        type: String,
        default: '/default-profile.jpg',
      },
      bio: {
        type: String,
        default: 'No bio available',
      },
      experience: {
        type: String,
        required: true,
      },
      classesHandled: {
        type: [String],
      },
});
export const User=mongoose.model("User",user);