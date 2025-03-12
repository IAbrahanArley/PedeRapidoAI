import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@exemplo.com",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Preencha todos os campos.");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Usuário não encontrado.");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) {
          throw new Error("Senha incorreta.");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.restaurantId = token.restaurantId as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.restaurantId = user.restaurantId;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// 🔹 Named exports para corrigir erro no App Router
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
