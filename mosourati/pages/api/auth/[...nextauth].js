import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // check if email and password are entered
        if (credentials?.email || credentials?.password) {
          throw new Error("Email and password are required");
        }

        // find the user in the db
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // check if the user is a valid user
        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }

        // compare the hashedpassword to the given one
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );

        // check if it is correct password
        if (!isCorrectPassword) {
          throw new Error("incorrect password");
        }

        // return the user
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth",
  },

  debug: process.env.NODE_ENV === "development",

  adapter: PrismaAdapter(prismadb),

  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
