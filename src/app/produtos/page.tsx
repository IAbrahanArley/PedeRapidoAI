import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Produtos = () => {
  return (
    <div>
      <h1 className="text-red-400">Produtos</h1>
      <Button variant="outline">Clique aqui</Button>
      <Input placeholder="Digite algo" />
    </div>
  );
};

export default Produtos;
