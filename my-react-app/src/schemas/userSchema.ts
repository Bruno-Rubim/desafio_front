import z from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Nome deve conter pelo menos 3 letras."),
  email: z.email("Email inválido."),
  phone: z.string(),
});

export type UserType = z.infer<typeof userSchema>;

export const userListSchema = z.array(userSchema);
export type UserListType = z.infer<typeof userListSchema>;
