import mongoose from "mongoose";
import { ArticleType } from "../types/Article";
const Schema = mongoose.Schema;

// Define the nested schema
const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
});

const ArticleSchema = new Schema<ArticleType>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: AuthorSchema,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Article = mongoose.model("articles", ArticleSchema);
