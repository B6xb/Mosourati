import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
  providers: [
    // OAuth authentication providers...

    CredentialsProvider({
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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // find the user in the db
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email.toLowerCase(),
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
        if (user) {
          return user;
        } else {
          return null;
        }
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
    secret: process.env.NETXAUTH_JWT_SECRET,
  },

  secret: process.env.NEXTAUHT_SECRET,

  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#ffdfd3c3", // Hex color code
    buttonText: "#1B1B1B", // Hex color code
  },

  // from the web
  callbacks: {
    session: ({ session, token }) => {
      if (token === null) {
        // Check if the user is signing out
        return { ...session, user: null };
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });
      if (token === null) {
        // Check if the user is signing out
        return { ...session, user: null };
      }
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
