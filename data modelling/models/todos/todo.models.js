import mongoose from "mongoose";
// import { User } from "./user.models";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId, // it is special type
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], //Arroys of sub todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
