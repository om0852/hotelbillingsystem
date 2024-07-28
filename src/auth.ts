import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "./modals/UserModal";
import { compare } from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        
        const email = credentials.email as string;
        const password = credentials.password as string;
        console.log(email, password);
        //checking email and password are empty
        if (!email || !password) {
          throw new CredentialsSignin("Please Provide Require Fields");
        }

        //connection with database


        
        //checking user have already account
        const user = await User.findOne({ email });
        if (!user) {
          throw new CredentialsSignin("Invalid Email or Password");
        }
        //if user has account but login throught google then there is not password login through google
        if (!user.password) {
          throw new CredentialsSignin("Try to login using google");
        }
        //comparing password
        const isMatch = await compare(password,user.password);

        if (!isMatch) {
          throw new CredentialsSignin("Password does not match");
        } else {
          return {name:user.name,email:user.email,id:user._id};
        }
      },
    }),
  ],
});
