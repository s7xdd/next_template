"use client";

import Button from "@/components/common/button/button";
import useApi from "@/hooks/api/use-api";
import { useAuthHandler } from "@/hooks/auth/use-auth-handler";
import { useCart } from "@/hooks/cart/use-cart";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", description: "" });

  const { handleLogout, user } = useAuthHandler();

  const { addToCartHandler, deleteCartItem } = useCart();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Button onClick={addToCartHandler}>Add to cart</Button>
      <Button onClick={deleteCartItem}>Delete cart item</Button>
      <Button onClick={handleLogout}>{user ? 'Logout' : 'Login'}</Button>
    </div>
  );
}
