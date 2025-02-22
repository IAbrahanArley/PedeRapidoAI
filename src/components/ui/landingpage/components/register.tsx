import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const RegisterForm = () => {
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
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" required />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input type="email" id="email" placeholder="Digite seu e-mail" required />
              </div>
          
              <div>
                <Label htmlFor="phone">Celular</Label>
                <Input type="tel" id="phone" placeholder="(00) 00000-0000" required />
              </div>
              <div>
                <Label htmlFor="delivery">Nome do Delivery</Label>
                <Input id="delivery" placeholder="Digite o nome do seu delivery" required />
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" placeholder="Digite sua senha" required />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Repetir Senha</Label>
                <Input type="password" id="confirmPassword" placeholder="Digite a senha novamente" required />
              </div>
              <Button className="w-full bg-fuchsia-800 text-white hover:bg-fuchsia-900">
                Criar Conta
              </Button>
            </form>
          </CardContent>
        </Card>
     );
}
 
export default RegisterForm;