import z from "zod";

export const FormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().min(1, "E-mail is required").email("Provide an e-mail"),
    password: z.string().min(4, "The password must have at leat 4 characters"),
    // .regex(/[0-9]/, "Provide at least one number"),
    confirmPassword: z.string().min(4, "This field is required"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
