
import { TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-current";

import { CartProduct } from "../../contexts/cart";

interface CartItemProps {
    item: CartProduct;
}
const CartItem = ({ item }: CartItemProps) => {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="relative h-20 w-20 bg-gray-100 rounded-lg">
                <Image src={item.imageUrl} alt={item.name} fill/>
            </div>

            <div className="space-y-1">
                <p className="text-xs max-w-[90%] truncate text-ellipsis">{item.name}</p>
                <p className="text-sm font-semibold gap-1">{formatCurrency(item.price)}</p>
                <div className="flex item-center text-center items-center gap-1">
                    <Button variant="outline" className="h-7 w-7 rounded-full" >-</Button>
                    <p className="text-xs w-7">{item.quantity}</p>
                    <Button variant="destructive" className="h-7 w-7 rounded-full">+</Button>
                </div>
            </div>
            </div>
            <Button variant="outline" className="h-7 w-7 rounded-full"><TrashIcon/></Button>
        </div>
     );
}
 
export default CartItem;