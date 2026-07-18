import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "online",
        },
      },
    }),
    // Demo/guest credentials — remove in production when a real DB is wired
    Credentials({
      id: "demo",
      name: "Demo Account",
      credentials: {},
      authorize: async () => ({
        id: "demo-user-careercompass",
        name: "Demo User",
        email: "demo@careercompass.app",
        image: null,
      }),
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    jwt({ token, user }) {
      // Persist the user's own ID into the token on first sign-in
      if (user?.id) token.userId = user.id;
      return token;
    },
    session({ session, token }) {
      // Expose the user ID to the client-side session
      if (token.userId && typeof token.userId === "string") {
        session.user.id = token.userId;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  trustHost: true,
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
