import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_SECRET as string,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email === (process.env.LOGIN_EMAIL as string)) {
        return true;
      } else {
        return false;
      }
    },
  },
  adapter: PrismaAdapter(prisma),
};
