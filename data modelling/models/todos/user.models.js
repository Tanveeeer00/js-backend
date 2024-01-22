import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // userName: String    // we can directly write this but we have better approach to unlock super power of mongoose.
    userName: {
      type: String,
      // isActive: Boolean,
      lowercase: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema); // model needs two parameter 1. what need to export or call it or name 2. in which based to export.
