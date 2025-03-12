import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, delivery } = body;

    if (!name || !email || !password || !delivery) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Este email já está cadastrado." },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const restaurant = await prisma.restaurant.create({
      data: {
        name: delivery,
        slug: delivery.toLowerCase().replace(/\s+/g, "-"),
        description: "Meu restaurante",
        avatarImageUrl: "",
        coverImageUrl: "",
      },
    });

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        restaurantId: restaurant.id,
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso!", user },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}
