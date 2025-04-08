"use client";

import { create } from "zustand";
import { initialState } from "./cart-initial";
import { createFormData } from "./cart-functions";
import { AddToCartProps, CartStateProps } from "@/types/store/cart-types";
import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";

export const useCartStore = create<CartStateProps>((set) => ({
  cart: initialState,

  getCart: async () => {
    const { data, error } = await handleApiRequest(apiEndpoints.cart.getcart, "get");
    set({ cart: data });

    console.log("caaaart", data);

    return { data, error };
  },

  addToCart: async (cartData: AddToCartProps) => {
    const formDataObject = createFormData(cartData);

    const url = `${apiEndpoints.cart.addtocart}`;

    const { data, error } = await handleApiRequest(url, "post", {
      data: formDataObject,
      toastSuccess: true,
      toastError: true,
    });

    if (data) {
      set({ cart: data });
    }

    return { data, error };
  },

  updateCart: async (cartData: AddToCartProps) => {
    const formDataObject = createFormData(cartData);

    const url = `${apiEndpoints.cart.addtocart}`;
    const body = formDataObject ? createFormData(formDataObject) : null;

    const { data, error } = await handleApiRequest(url, "post", {
      data: body || "",
      toastSuccess: true,
      toastError: true,
    });

    if (data) {
      set({ cart: data });
    }

    return { data, error };
  },

  deleteCartItem: async (itemKey: string) => {
    const url = `${apiEndpoints.cart.removefromcart(itemKey)}`;

    await handleApiRequest(url, "post", {
      toastSuccess: true,
      toastError: true,
    });
  },

  // clearCart: async () => {
  //   await handleApiRequest(apiEndpoints.cart.clearcart, "post", {
  //     toastSuccess: true,
  //     toastError: true,
  //   });

  //   set({ cart: initialState });
  // },
}));
