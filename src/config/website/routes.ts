export const WEBSITE_ROUTES = {
    auth: {
        login: "/auth/login",
    },
    pages: {
        dashboard: '/',
        allorders: '/orders/all-orders',
        allcustomers: '/orders/all-customers',
        createcountry: '/setup/country/create',
        country: (id?: string) =>  `/setup/country${id ? `/${id}` : ''}`,
        product: (id?: string) => `/ecommerce/products${id ? `/${id}` : ''}`,
        createproduct:  `/ecommerce/products/create`,
        brands: (id?: string) =>  `/ecommerce/brands${id ? `/${id}` : ''}`,
        createbrand:  `/ecommerce/brands/create`,
        categories: (id?: string) => `/ecommerce/categories${id ? `/${id}` : ''}`,
        createcategory:  `/ecommerce/categories/create`,

    }
}