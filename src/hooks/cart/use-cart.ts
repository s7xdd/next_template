import { useCartStore } from "@/store/cart/cart-store";

export const useCart = () => {
  const { addToCart, getCart, updateCart, cart } = useCartStore();

  const addToCartHandler = () => {
    addToCart({
      id: 65,
      quantity: 1,
    });
  };

  const updateCartHandler = () => {
    updateCart({
      id: 65,
      quantity: 1,
    });
  };

  const deleteCartItem = () => {
    updateCart({
      id: 'e6bbf6c12c2838e45b429d12da547a09',
      quantity: 1,
    });
  };

  return { addToCartHandler, getCart, updateCartHandler, deleteCartItem, cart };
};
