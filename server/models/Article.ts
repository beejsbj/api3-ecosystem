import mongoose from "mongoose";
import { ArticleType } from "../types/Article";
const Schema = mongoose.Schema;

// Define the nested schema
const AuthorSchema = new mongoose.Schema({
  name: String,
});

const ArticleSchema = new Schema<ArticleType>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
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
    type: Schema.Types.Mixed,
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
