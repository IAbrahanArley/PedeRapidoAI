import { useContext } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-current";

import CartProduct from "../[productId]/components/cart-item";
import { CartContext } from "../contexts/cart";
import FinishOrderButton from "./finish-order-button";
const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  const [finishOrder, setFinishOrder] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
          <SheetDescription className="text-left">
            Seus Produtos:
          </SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartProduct key={product.id} item={product} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <Button
            className="w-full rounded-full"
            onClick={() => setFinishOrder(true)}
          >
            Finalizar Pedido
          </Button>
          <FinishOrderButton open={finishOrder} onOpenChange={setFinishOrder} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
