import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  chainId: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
  registered_at: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model("users", UserSchema);
