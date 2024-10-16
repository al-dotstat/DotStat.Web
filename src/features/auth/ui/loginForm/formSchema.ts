import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Кажется, это не похоже на Email"),
  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
});

export interface FormSchema extends z.infer<typeof formSchema> {}
