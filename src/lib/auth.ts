// lib/auth-options.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        correo: { label: "Correo", type: "text" },
        contrasena: { label: "Contraseña", type: "password" },
      },
     async authorize(credentials) {
  try {
      if (!credentials?.correo || !credentials?.contrasena) throw new Error("Faltan datos");


    const user = await prisma.usuario.findUnique({
      where: { correo: credentials.correo },
      include: { empleado: true },
    });

    if (!user || !user.isActive) throw new Error("Usuario no encontrado o inactivo");

    const isValid = await bcrypt.compare(
      credentials.contrasena,
      user.contrasena
    );
     if (!isValid) throw new Error("Contraseña incorrecta");

    return {
      id: user.idUsuario.toString(),
      email: user.correo,
      userName: user.userName ?? "",
      rol: user.empleado?.rol ?? "SinRol",
    };
  } catch (error) {
    console.error("Error en autorización:", error);
    throw error;  
  }
}

    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.userName;
        token.rol = user.rol;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.rol = token.rol;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};
