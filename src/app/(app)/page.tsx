"use client";

import Button from "@/components/common/button/button";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import useApi from "@/hooks/api/use-api";
import { useCart } from "@/hooks/cart/use-cart";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", description: "" });

  const { data, triggerRequest } = useApi("/wp-json", "get", { defaultParams: { page_size: 10 }, autoFetch: true });

  const { addToCartHandler } = useCart();

  return (
    <div>
      <Button onClick={addToCartHandler}>Add to cart</Button>
    </div>
  );
}
