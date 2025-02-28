"use client"

import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";
import { useState } from "react";

export interface CartProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
    quantity: number;
}

export interface ICartContext{
    isOpen: boolean;
    products: CartProduct[];
    toggleCart: () => void;
    totalQuantity: number;
    addProduct: (product: CartProduct) => void;
    decreaseProduct: (productId: string) => void;
    increaseProduct: (productId: string) => void;
    removeProduct: (productId: string) => void;
    total: number;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    toggleCart: () => {},
    totalQuantity: 0,
    addProduct: () => {},
    decreaseProduct: () => {},
    increaseProduct: () => {},
    removeProduct: () => {},
    total: 0,

});

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [products, setProducts] = useState<CartProduct[]>([]);
    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const toggleCart = () => {
        setIsOpen((prev) => !prev);
    };
    const totalQuantity = products.reduce((acc, product) => {
        return acc + product.quantity;
      }, 0);
    const addProduct = (product: CartProduct) => {
        const productIsAlreadyInCart = products.some((prevProduct) => prevProduct.id === product.id);
        if(!productIsAlreadyInCart){
            return setProducts((prev) => [...prev, product]);
        }

        setProducts(prevProducts => prevProducts.map((prevProduct) => {
            if(prevProduct.id === product.id){
                return {...prevProduct, quantity: prevProduct.quantity + product.quantity};
            }
            return prevProduct;
        }));
        
    };

    const decreaseProduct = (productId: string) => {
        setProducts((prev) => prev.map((product) => {
            if(product.id !== productId){
                return product;
            }
            if(product.quantity === 1){
                return product;
            }
            return {...product, quantity: product.quantity - 1};
          
         
        }));
    };

    const increaseProduct = (productId: string) => {
        setProducts((prev) => prev.map((product) => {
            if(product.id !== productId){
                return product; 
            }
            return {...product, quantity: product.quantity + 1};
        }));
    };

    const removeProduct = (productId: string) => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{isOpen, products, toggleCart, addProduct, decreaseProduct, increaseProduct, removeProduct, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    );
};