import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "./modals/UserModal";
import { connectDB } from "./lib/db";

export const { handlers, signIn, signOut, auth } =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) {
          throw new CredentialsSignin("Please Provide Required Fields");
        }

        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
          throw new CredentialsSignin("Invalid Email or Password");
        }

        if (!user.password) {
          throw new CredentialsSignin("Try to login using google");
        }

        const isMatch = password === user.password
        if (!isMatch) {
          throw new CredentialsSignin("Password does not match");
        }

        return { id: user._id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  
});
