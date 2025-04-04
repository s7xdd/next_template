
export const apiEndpoints = {
  auth: {
    login: "/wp-json/jwt-auth/v1/token",
    register: "/wp-json/wc/v3/customers",
    forgotpassword: "/wp-json/custom/v1/forgot-password/",
    resetpassword: "/wp-json/custom/v1/reset-password/",
    changepassword: `/wp-json/wp/v2/users`,
  },
  menu: {
    navbar: `/wp-json/menus/v1/menus/primary-menu`,
    contactus: `/wp-json/wp/v2/pages/621`,
    // footer: `/wp-json/menus/v1/menus/footer-menu`,
    footerquicklinks: `/wp-json/menus/v1/menus/57`,
    footercustomersupport: `/wp-json/menus/v1/menus/58`,
    footercustomization: `/wp-json/menus/v1/menus/59`,
    about: `/wp-json/acf/v3/pages/678`,
  },
  products: {
    productLists: (per_page: number, page: number, category?: string) =>
      `/wp-json/wc/v3/products?orderby=menu_order&order=asc&per_page=${per_page}&page=${page}${category && category !== undefined ? `&category=${category}` : ""}`,
    productDetails: (slug: number, sku?: string) => `/wp-json/wc/v3/products/${slug}${sku ? `/${sku}` : ``}`,
    search: (slug: number | string) => `/wp-json/custom-api/v1/products?slug=${slug}`,
    productImage: (imageId: string | number) => `/wp-json/wp/v2/media/${imageId}`,
    addImage: `/wp-json/wc/v2/media`,
  },
  order: {
    orderdetails: (oid?: number | string) => `/wp-json/wc/v3/orders${oid ? `/${oid}` : ""}`,
    orders: `/wp-json/my-api/v1/orders-by-customer/`,
    placeorder: "/wp-json/telr-payment/v1/create-order",
    updateorder: (oid?: number | string) => `/wp-json/wc/v3/orders/${oid}`,
  },
  user: {
    updateprofile: `/wp-json/wc/v3/customers/`,
  },
  cart: {
    getcart: `/wp-json/cocart/v2/cart`,
    addtocart: "/wp-json/cocart/v2/cart/add-item",
    updateCartItem: `/wp-json/cocart/v2/cart/item?cart_key=`,
    updateCart: "/wp-json/cocart/v2/cart/update",
    deleteCartItem: (item_key: string) => {
      return `/wp-json/cocart/v2/cart/item/${item_key}`;
    },
    clearcart: `/wp-json/cocart/v2/cart/clear`,
  },

  pages: {},

  //Yoast Metadata
  metadata: {
    metadata: "/wp-json/yoast/v1/get_head",
  },

  seoUrls: {},

  status: {},
};
