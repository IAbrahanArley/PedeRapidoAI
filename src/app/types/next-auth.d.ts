import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      restaurantId?: string;
    };
  }

  interface User {
    id: string;
    restaurantId?: string;
  }
  interface JWT {
    id: string;
    restaurantId?: string; // Adicione esta linha
  }
}
