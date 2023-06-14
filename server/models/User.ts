import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  account: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
  },
  phone_verified: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  registered_at: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model("users", UserSchema);
