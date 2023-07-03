import { z } from "zod";

const UserSchema = z.object({
  address: z.string().nonempty("Address is required"),
  chainId: z.number().positive("ChainId must be a positive number"),
  avatar: z.string().optional(),
  role: z.enum(["user", "admin", "moderator"]).default("user"),
  registered_at: z.date().default(() => new Date()),
});

// Zod type for UserSchema
export type UserType = z.infer<typeof UserSchema>;
