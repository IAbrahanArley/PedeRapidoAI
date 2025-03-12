"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    delivery: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const { error } = await res.json();
      alert(error);
    }
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-start text-2xl font-semibold text-gray-800">
          Cadastre-se Agora
        </CardTitle>
        <CardDescription className="text-gray-600">
          Faça parte da nossa plataforma e comece a vender mais hoje mesmo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="delivery">Nome do Delivery</Label>
            <Input
              id="delivery"
              name="delivery"
              placeholder="Digite o nome do seu delivery"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Repetir Senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Digite a senha novamente"
              required
              onChange={handleChange}
            />
          </div>
          <Button
            className="w-full bg-fuchsia-800 text-white hover:bg-fuchsia-900"
            type="submit"
          >
            Criar Conta
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
