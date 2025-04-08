"use client";

import Button from "@/components/common/button/button";
import { WEBSITE_ROUTES } from "@/config/website/routes";
import { useCart } from "@/hooks/cart/use-cart";
import { useAuthStore } from "@/store/auth/auth-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", description: "" });

  const router = useRouter();

  const { logout, isAuthenticated, user } = useAuthStore();

  const { addToCartHandler, deleteCartItem, cart } = useCart();

  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {'Hello' + user?.email}
        <Button onClick={addToCartHandler}>Add to cart</Button>
        <Button onClick={deleteCartItem}>Delete cart item</Button>
        {!isAuthenticated ? (
          <Button onClick={() => router.push(WEBSITE_ROUTES.auth.login)}>{"Login"}</Button>
        ) : (
          <Button
            onClick={() => {
              logout();
            }}
          >
            {"Logout"}
          </Button>
        )}
      </div>

      {console.log("cartcart", cart)}

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {cart?.items?.map((item) => (
          <li
            key={item.key}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <div>
              <img src={item.images[0].src} alt={item.images[0].alt} style={{ height: "50px", width: "50px" }} />
            </div>
            <div style={{ flex: 1 }}>
              <p>{item.name}</p>
              <p>{item.short_description && `${item.short_description.substring(0, 50)}...`}</p>
            </div>
            <div>
              <p>
                {item.prices.price} {item.prices.currency_symbol}
              </p>
              <p>x {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
