import { z } from "zod";

export const formSchema = z
  .object({
    password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
    confirmPassword: z.string().min(1, "Введите пароль ещё раз"),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Пароли должны совпадать",
        path: ["confirmPassword"],
      });
    }
  });

export interface FormSchema extends z.infer<typeof formSchema> {}
