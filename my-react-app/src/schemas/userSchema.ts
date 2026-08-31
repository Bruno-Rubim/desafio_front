import z from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "[placeholder]"),
  email: z.email(""),
  phone: z.string(),
});

export type UserType = z.infer<typeof userSchema>;

export const usersSchema = z.array(userSchema);
export type UsersType = z.infer<typeof usersSchema>;
