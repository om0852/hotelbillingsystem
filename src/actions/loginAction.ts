"use server";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

export const loginHandler = async (formData: FormData) => {
    try {
    const data=  await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect:true,
        redirectTo:"/"
      });
    } catch (error) {
      const err = error as CredentialsSignin;
    //   console.log(err.message)
      return err.message.split(".")[0]
    }
  };