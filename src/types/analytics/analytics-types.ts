export type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
  };
  
  export type PaymentItem = {
    item_id: string | number;
    item_name: string;
    price: number;
    quantity: number;
    item_category?: string;
    item_variant?: string;
  };
  
  export type PaymentEventParams = {
    currency: any;
    value: string | number;
    payment_type: string;
    items: PaymentItem[];
  };
  
  export type CheckoutItem = {
    item_id: string | number;
    item_name: string;
    price: number;
    quantity: number;
    item_category?: string | number;
    item_variant?: string;
  };
  
  export type CheckoutEventParams = {
    currency: any;
    value: string | number;
    items: CheckoutItem[];
  };
  
  export type PurchaseItem = {
    item_id: string | number;
    item_name: string;
    price: number;
    quantity: number;
    item_category?: string;
    item_variant?: string;
  };
  
  export type PurchaseEventParams = {
    transaction_id: string | number;
    currency: string;
    value: number;
    shipping?: number;
    items: PurchaseItem[];
  };
  