"use client";

import Button from "@/components/common/button/button";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import useApi from "@/hooks/api/use-api";
import { useCart } from "@/hooks/cart/use-cart";
import { useAuthStore } from "@/store/auth/auth-store";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", description: "" });

  const { logout } = useAuthStore();

  const { data, triggerRequest } = useApi("/wp-json", "get", { defaultParams: { page_size: 10 }, autoFetch: false });

  const { addToCartHandler } = useCart();

  return (
    <div>
      <Button onClick={addToCartHandler}>Add to cart</Button>
      <Button onClick={logout}>Add to cart</Button>
    </div>
  );
}
