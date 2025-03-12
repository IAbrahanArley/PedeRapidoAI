"use client";

import { GoalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-cyan-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Entrar na Plataforma
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <Button
              className="w-full bg-fuchsia-800 text-white hover:bg-fuchsia-900"
              type="submit"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Ou entre com</p>
            <Button
              className="mt-2 flex w-full items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              onClick={() => signIn("google")}
            >
              <GoalIcon className="text-xl" /> Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
