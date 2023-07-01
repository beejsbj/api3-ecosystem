import mongoose from "mongoose";
import { ProjectType } from "../types";
import { CHAINS } from "@api3/chains";

const chains = CHAINS.map((chain) => chain.id) as [string, ...string[]];

const Schema = mongoose.Schema;

// Define the nested schema
const SocialSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
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

const ProjectSchema = new Schema<ProjectType>({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["inactive", "active", "rejected"],
    default: "inactive",
  },
  images: {
    type: ImageSchema,
  },
  categories: {
    type: [String],
    required: true,
  },
  productType: {
    type: String,
    enum: ["datafeed", "qrng"],
    required: true,
  },
  chains: {
    type: [String],
    enum: chains,
    required: true,
  },
  proxies: {
    type: Schema.Types.Mixed,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  links: {
    type: ProjectLinkSchema,
  },
});

export const Project = mongoose.model<ProjectType>("projects", ProjectSchema);
