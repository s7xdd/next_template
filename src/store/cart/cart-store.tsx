"use client";

import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { CartStateProps } from "@/types/store/cart-types";
import { getCartKey, getToken } from "@/utils/storage";
import { create } from "zustand";
import { initialState } from "./cart-initial";
import { createFormData } from "./cart-functions";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";

export const useCartStore = create<CartStateProps>((set) => ({
  cart: initialState,

  addToCart: async (cartData: Record<string, any>) => {
    const cartKey = getCartKey();
    const token = getToken();
    const formDataObject = createFormData(cartData);

    const url = `${apiEndpoints.cart.addtocart}${!token && cartKey ? `?cart_key=${cartKey}` : ""}`;

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
    const cartKey = getCartKey();
    const { formData, ...params } = cartData;

    let url = `${apiEndpoints.cart.updateCartItem}${cartKey}`;
    const body = formData ? createFormData(formData) : null;

    if (!formData) {
      const queryParams = new URLSearchParams(params as any).toString();
      url += `?${queryParams}`;
    }

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
    const cartKey = getCartKey();
    const token = getToken();

    const url = `${apiEndpoints.cart.deleteCartItem(itemKey)}${!token ? `?cart_key=${cartKey}` : ""}`;

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
