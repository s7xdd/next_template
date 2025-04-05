"use client";

import { create } from "zustand";
import { initialState } from "./cart-initial";
import { createFormData } from "./cart-functions";
import { CartStateProps } from "@/types/store/cart-types";
import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";

export const useCartStore = create<CartStateProps>((set) => ({
  cart: initialState,

  getCart: async () => {
    const { data, error } = await handleApiRequest(apiEndpoints.cart.getcart, "get");
    set({ cart: data?.requestedData });

    return { data, error };
  },

  addToCart: async (cartData: Record<string, any>) => {
    const formDataObject = createFormData(cartData);

    const url = `${apiEndpoints.cart.addtocart}`;

    const { data, error } = await handleApiRequest(url, "post", {
      data: formDataObject,
      toastSuccess: true,
      toastError: true,
    });

    if (data?.requestedData) {
      set({ cart: data.requestedData });
    }

    return { data, error };
  },

  updateCart: async (cartData: Record<string, any>) => {
    const { formData, ...params } = cartData;

    const url = `${apiEndpoints.cart.updateCartItem}`;
    const body = formData ? createFormData(formData) : null;

    const { data, error } = await handleApiRequest(url, "post", {
      data: body || "",
      params,
      toastSuccess: true,
      toastError: true,
    });

    if (data?.requestedData) {
      set({ cart: data.requestedData });
    }

    return { data, error };
  },

  deleteCartItem: async (itemKey: string) => {
    const url = `${apiEndpoints.cart.deleteCartItem(itemKey)}`;

    await handleApiRequest(url, "post", {
      toastSuccess: true,
      toastError: true,
    });
  },

  clearCart: async () => {
    await handleApiRequest(apiEndpoints.cart.clearcart, "post", {
      toastSuccess: true,
      toastError: true,
    });

    set({ cart: initialState });
  },
}));
