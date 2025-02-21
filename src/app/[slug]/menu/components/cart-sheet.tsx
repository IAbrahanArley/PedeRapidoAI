import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader,SheetTitle } from "@/components/ui/sheet";

import CartProduct from "../[productId]/components/cart-item";
import { CartContext } from "../contexts/cart";
const CartSheet = () => {
    const {isOpen, toggleCart, products} = useContext(CartContext);
    return ( 
        <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent className="w-[80%]">
          <SheetHeader>
            <SheetTitle className="text-left">Sacola</SheetTitle>
            <SheetDescription className="text-left">Seus Produtos:</SheetDescription>
          </SheetHeader>
          <div className="py-3">
            
          {products.map((product) => (
            <CartProduct key={product.id} item={product} />
          ))}
          </div>
        </SheetContent>
      </Sheet>
     );
}
 
export default CartSheet;