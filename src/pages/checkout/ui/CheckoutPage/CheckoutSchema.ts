import * as z from "zod";

export const CheckoutSchema = z.object({
    name: z.string().trim().min(2, "Имя должно содержать не менее 2 символов").max(30, "Имя должно содержать не более 30 символов"),
    email: z.email("Введите корректный email"),
    phone: z.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Введите корректный номер телефона"),
    address: z.string().trim(),
    check: z.literal(true, {
        error: () => ({ message: "Необходимо дать согласие на обработку персональных данных" })
    })
});

export type CheckoutSchema = z.infer<typeof CheckoutSchema>;



