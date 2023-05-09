import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
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
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUHT_SECRET,

  session: {
    strategy: "jwt",
  },

  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#ffdfd3c3", // Hex color code
    buttonText: "#1B1B1B", // Hex color code
  },

  jwt: {
    secret: process.env.NETXAUTH_JWT_SECRET,
  },

  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    async jwt({ token, user }) {
      console.log("JWT Callback", { token });
      const dbUser = await prismadb.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
      };
    },
  },
};
