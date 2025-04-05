import { useCartStore } from "@/store/cart/cart-store";

export const useCart = () => {

    const { addToCart, getCart } = useCartStore()
  
  const addToCartHandler = () => {
    addToCart({
        id: 65,
        quantity: 1
    })
  }
  
  
    return { addToCartHandler, getCart };
};
