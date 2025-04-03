
export const apiEndpoints = {
    auth: {
        login: '/admin/auth/login',
    },
    pages: {
        dashboard: '/admin/dashboard/dashboard'
    },
    product: {
        products: (id?: string) => `/admin/products${id ? `/${id}` : ''}`,
        brands: (id?: string) => `/admin/brands${id ? `/${id}` : ''}`,
        category: (id?: string) => `/admin/category${id ? `/${id}` : ''}`,
        attributes: (id?: string) => `admin/attributes${id ? `/${id}` : ''}`,
    },
    setup: {
        country: (id?: string) => `/admin/setup/country${id ? `/${id}` : ''}`,
    },






    status: {
        country: (id: string) => `/admin/setup/country/status-change/${id}`,
        product: (id: string) => `/admin/products/status-change/${id}`,
        brand: (id?: string) => `/admin/brands/status-change/${id}`,
        category: (id?: string) => `/admin/category/status-change/${id}`,
    }
}