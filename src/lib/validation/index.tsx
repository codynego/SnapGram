import * as z from "zod"



export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Too short" }).max(50),
    username: z.string().min(2, { message: "Too short" }).max(50),
    email: z.string().email(),
    password: z.string().min(6, { message: "password must be at least 6 characters" }),
})
