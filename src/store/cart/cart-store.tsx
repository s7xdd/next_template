"use client";

import { handleCommonApi } from "@/config/api/common-services";
import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import { CartState, CartStateProps } from "@/types/store/cart-types";
import { getCartKey, getToken } from "@/utils/storage";
import { create } from "zustand";

const initialState: CartState = {
  cart_hash: "",
  cart_key: "",
  currency: {
    currency_code: "",
    currency_symbol: "",
    currency_symbol_pos: "",
    currency_minor_unit: null,
    currency_decimal_separator: "",
    currency_thousand_separator: "",
    currency_prefix: "",
    currency_suffix: "",
  },
  customer: {
    billing_address: {
      billing_first_name: "",
      billing_last_name: "",
      billing_company: "",
      billing_country: "",
      billing_address_1: "",
      billing_address_2: "",
      billing_city: "",
      billing_state: "",
      billing_postcode: "",
      billing_phone: "",
      billing_email: "",
    },
    shipping_address: {
      shipping_first_name: "",
      shipping_last_name: "",
      shipping_company: "",
      shipping_country: "",
      shipping_address_1: "",
      shipping_address_2: "",
      shipping_city: "",
      shipping_state: "",
      shipping_postcode: "",
      shipping_phone: "",
    },
  },
  items: [],
  item_count: 0,
  items_weight: "",
  coupons: [],
  needs_payment: false,
  needs_shipping: false,
  shipping: [],
  fees: [],
  taxes: [],
  totals: {
    subtotal: "",
    subtotal_tax: "",
    fee_total: "",
    fee_tax: "",
    discount_total: "",
    discount_tax: "",
    shipping_total: "",
    shipping_tax: "",
    total: "",
    total_tax: "",
  },
  removed_items: [],
  cross_sells: [],
  notices: [],
  // images: {},
  selected_country: "",
  int_shipping_charge: 0, // Additional shipping charge for international shipping
};

export const useCartStore = create<CartStateProps>((set, get) => ({
  cart: initialState,

  addtocart: async (cartData: { formData?: any; [key: string]: string | number | boolean | File | undefined }) => {
    const getCartKeyDynamic = getCartKey();
    const getTokenDynamic = getToken();
    
    const formDataObject = new FormData();
    Object.entries(cartData).forEach(([key, value]) => {
      if (value instanceof File) {
        formDataObject.append(key, value);
      } else if (value !== undefined && value !== null) {
        formDataObject.append(key, String(value));
      }
    });

    const url = `${apiEndpoints.cart.addtocart}${
      !getTokenDynamic && getCartKeyDynamic && getCartKeyDynamic.length ? `?cart_key=${getCartKeyDynamic}` : ``
    }`;

    const { data, error }: { data: any; error: any } = await handleApiRequest(
      () => handleCommonApi(url, "post", "", cartData.formData),
      true,
      true,
    );

    //REAL LOGIN
    if (data && data?.requestedData) {
      set({
        cart: data?.requestedData,
      });
    }

    return { data, error };
  },

  updatecart: async (cartData: { formData?: any; [key: string]: string | number | boolean | File | undefined }) => {
    const { formData, ...params } = cartData;
    const getCartKeyDynamic = getCartKey();

    if (formData) {
      const formDataObject = new FormData();
      for (const key in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, key)) {
          formDataObject.append(key, formData[key]);
        }
      }
      const updateCartUrl = `${apiEndpoints.cart.updateCartItem}${getCartKeyDynamic}`;

      const { data, error }: { data: any; error: any } = await handleApiRequest(
        () => handleCommonApi(updateCartUrl, "post", "", formDataObject, params),
        true,
        true,
      );

      if (data && data?.requestedData) {
        set({
          cart: data?.requestedData,
        });
      }
    } else {
      const queryParams = new URLSearchParams(params as any).toString();
      const updateCartUrl = `${apiEndpoints.cart.updateCartItem}${getCartKeyDynamic}${queryParams}`;

      const { data, error }: { data: any; error: any } = await handleApiRequest(
        () => handleCommonApi(updateCartUrl, "post", "", "", params),
        true,
        true,
      );

      if (data && data?.requestedData) {
        set({
          cart: data?.requestedData,
        });
      }
    }
  },

  deletecartitem: async (item_key: string) => {
    const getCartKeyDynamic = getCartKey();
    const getTokenDynamic = getToken();
    const deleteCartUrl = `${apiEndpoints.cart.deleteCartItem(item_key)}${
      !getTokenDynamic ? `?cart_key=${getCartKeyDynamic}` : ``
    }`;

    await handleApiRequest(() => handleCommonApi(deleteCartUrl, "post"), true, true);
  },

  clearcart: async () => {
    await handleApiRequest(() => handleCommonApi(apiEndpoints.cart.clearcart, "post"), true, true);

    set({
      cart: initialState,
    });
  },
}));
