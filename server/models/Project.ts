import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the nested schema
const ChainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chainId: { type: Number, required: true },
});

// Define the nested schema
const SocialSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  logo: String,
});

const ProjectLinkSchema = new mongoose.Schema({
  dapp: { type: String, required: true },
  doc: { type: String, required: true },
  website: { type: String, required: true },
  explorer: { type: String, required: true },
  socials: { type: [SocialSchema], required: true },
});

const ImageSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  cover: { type: String, required: true },
  banner: { type: String, required: true },
  screenshots: { type: [String], required: true },
});

const proxySchema = new mongoose.Schema({
  proxyType: { type: String, required: true },
  feedName: { type: String, required: true },
  dapiName: { type: String, required: true },
  proxyAddress: { type: String, required: true },
  oevBeneficiary: { type: String },
});

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: {
      values: ["inactive", "active", "rejected"],
      required: true,
    },
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
  chains: {
    type: [ChainSchema],
    required: true,
  },
  proxies: {
    type: [proxySchema],
    required: true,
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
