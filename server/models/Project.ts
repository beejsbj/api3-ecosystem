import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the nested schema
const ChainSchema = new mongoose.Schema({
  name: String,
  chainId: Number,
});

// Define the nested schema
const SocialSchema = new mongoose.Schema({
  name: String,
  url: String,
  logo: String,
});

const ProjectLinkSchema = new mongoose.Schema({
  dapp: String,
  doc: String,
  website: String,
});

const ImageSchema = new mongoose.Schema({
  logo: String,
  cover: String,
  banner: String,
  screenshots: [String],
});

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  about: {
    type: [String],
    required: true,
  },
  images: {
    type: ImageSchema,
  },
  categories: {
    type: [String],
    required: true,
  },
  productTypes: {
    type: [String],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  live: {
    type: Boolean, //
    default: false,
  },
  socials: {
    type: [SocialSchema],
  },
  chains: {
    type: [ChainSchema],
  },
  year: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  links: {
    type: ProjectLinkSchema,
  },
});

export const Project = mongoose.model("projects", ProjectSchema);
