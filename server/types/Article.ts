import { z } from "zod";

const AuthorSchema = z.object({
  name: z.string(),
  bio: z.string(),
});

const ArticleSchema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  author: AuthorSchema,
  content: z.string().nonempty("Content is required"),
  category: z.string().nonempty("Category is required"),
  created_at: z.date().default(() => new Date()),
});

// Zod type for ArticleSchema
export type ArticleType = z.infer<typeof ArticleSchema>;
