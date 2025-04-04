"use client";

import { create } from "zustand";
import { initialState } from "./cart-initial";
import { createFormData } from "./cart-functions";
import { CartStateProps } from "@/src/types/store/cart-types";
import { getCartKey, getToken } from "@/src/utils/storage";
import { apiEndpoints } from "@/src/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/src/config/setup/wrapper/api-wrapper";

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

    const url = `${apiEndpoints.cart.updateCartItem}${cartKey}`;
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
    const cartKey = getCartKey();
    const token = getToken();

    const params = !token
      ? {
          cartKey: cartKey,
        }
      : {
          undefined,
        };

    const url = `${apiEndpoints.cart.deleteCartItem(itemKey)}`;

    await handleApiRequest(url, "post", {
      params: params,
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
