import {
  CheckoutEventParams,
  PaymentEventParams,
  PurchaseEventParams,
  WindowWithDataLayer,
} from "@/types/analytics/analytics-types";

declare const window: WindowWithDataLayer;

export const sendViewItemListEvent = (productData: any[]) => {
  if (productData.length) {
    window.dataLayer.push({
      event: "view_item_list",
      item_list_id: "view_item_list",
      item_list_name: "view_item_list",
      items: productData.map((product: any, index: any) => ({
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        index,
        item_category: product.categories[0]?.name || "Uncategorized",
      })),
    });
  }
};

export const handleProductClick = (product: any, index: number) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push({
      event: "select_item",
      item_list_id: "select_item",
      item_list_name: "select_item",
      items: [
        {
          item_id: product.id.toString(),
          item_name: product.name,
          price: product.price,
          index: index,
          item_category: product.categories[0]?.name || "Uncategorized",
          currency: "AED",
        },
      ],
    });
  }
};

export const trackPredesignAddToCartEvent = (product: any, selectedVariation: any) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push({
      event: "add_to_cart",
      currency: "AED",
      item_list_id: "add_to_cart",
      item_list_name: "add_to_cart",
      value: Number(selectedVariation.price),
      items: [
        {
          item_id: selectedVariation.id.toString(),
          item_name: product.name,
          item_category: product.categories[0]?.name || "Uncategorized",
          item_variant: selectedVariation.attributes.find((attr) => attr.slug.includes("metal"))?.option || "Default",
          price: Number(selectedVariation.price),
          quantity: 1,
        },
      ],
    });
  }
};

export const trackCustomizationAddToCartEvent = (
  allVariations: any[],
  selectedVariationId: number | string,
  product: any,
  totalPrice: number,
  borderPrice?: number,
  selectedBorderId?: string,
) => {
  if (typeof window !== "undefined") {
    const selectedVariation = allVariations.find((v) => v.id === selectedVariationId);
    window.dataLayer.push({
      event: "add_to_cart",
      item_list_id: "add_to_cart",
      item_list_name: "add_to_cart",
      currency: "AED",
      value: totalPrice + (borderPrice || 0),
      items: [
        {
          item_id: selectedVariation?.id?.toString() || product?.id?.toString(),
          item_name: product?.name || "Customized Card",
          item_category: product?.categories[0]?.name || "Uncategorized",
          item_variant:
            selectedVariation?.attributes?.find((attr) => attr.slug.includes("metal"))?.option ||
            selectedBorderId ||
            "Custom",
          price: totalPrice + (borderPrice || 0),
          quantity: 1,
        },
      ],
    });
  }
};

export const trackBeginCheckout = ({ currency, value, items }: CheckoutEventParams) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push({
      event: "begin_checkout",
      item_list_id: "begin_checkout",
      item_list_name: "begin_checkout",
      currency,
      value,
      items: items.map((item) => ({
        item_id: item.item_id.toString(),
        item_name: item.item_name,
        price: item.price,
        quantity: item.quantity,
        item_category: item.item_category || "Uncategorized",
        item_variant: item.item_variant || "",
      })),
    });
  }
};

export const trackAddPaymentInfo = ({ currency, value, payment_type, items }: PaymentEventParams) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push({
      event: "add_payment_info",
      item_list_id: "add_payment_info",
      item_list_name: "add_payment_info",
      currency,
      value,
      payment_type,
      items: items.map((item) => ({
        item_id: item.item_id,
        item_name: item.item_name,
        price: item.price,
        quantity: item.quantity,
        item_category: item.item_category || "Uncategorized",
        item_variant: item.item_variant || "",
      })),
    });
  }
};

export const trackPurchaseEvent = ({ transaction_id, currency, value, shipping = 0, items }: PurchaseEventParams) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push({
      event: "purchase",
      transaction_id: transaction_id.toString(),
      item_list_id: "purchase",
      item_list_name: "purchase",
      currency,
      value,
      shipping,
      items: items.map((item) => ({
        item_id: item.item_id.toString(),
        item_name: item.item_name,
        price: item.price,
        quantity: item.quantity,
        item_category: item.item_category || "Uncategorized",
        item_variant: item.item_variant || "",
      })),
    });
  }
};
