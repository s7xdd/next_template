export type ProductResponseDataProps = {
    requestedData: ProductProps[];
    totalCount: number;
    message: string;
    status: boolean;
}

export interface ProductProps {
    _id: string;
    productTitle: string;
    slug: string;
    showOrder: string;
    starRating: string;
    isVariant: string;
    description: string;
    productImageUrl: string;
    longDescription: string;
    brand: {
        _id: string;
        brandTitle: string;
        slug: string;
        description: string;
        brandImageUrl: string;
        brandBannerImageUrl: string | null;
        status: string;
    };
    unit: string;
    warehouse: string | null;
    measurements: {
        weight: string;
        hight: string;
        length: string;
        width: string;
    };
    tags: string;
    sku: string;
    newArrivalPriority: string;
    corporateGiftsPriority: string;
    completeTab: number;
    pageTitle: string;
    status: string;
    statusAt: string;
    isExcel: boolean;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    prodcutCode: number;
    __v: number;
    productCategory: Array<{
        _id: string;
        productId: string;
        category: {
            _id: string;
            categoryTitle: string;
            slug: string;
            parentCategory: string | null;
            categoryImageUrl: string;
            categorySecondImageUrl: string | null;
            level: string;
            status: string;
        };
    }>;
    productVariants: ProductVariantProps[];
    imageGallery: Array<{
        _id: string;
        galleryImageUrl: string;
        productID: string;
        status: string;
        statusAt: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    }>;
    productSeo: {
        _id: string;
        pageId: string;
        pageReferenceId: string | null;
        page: string;
        metaTitle: string;
        metaKeywords: string;
        metaDescription: string;
        ogTitle: string;
        ogDescription: string;
        twitterTitle: string;
        twitterDescription: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    languageValues: Array<{}>;
    productSpecification: Array<{}>;
}

export interface ProductVariantProps {
    _id: string;
    productId: string;
    countryId: string;
    offerId: string | null;
    variantSku: string;
    slug: string;
    showOrder: string;
    extraProductTitle: string;
    variantDescription: string;
    price: number;
    discountPrice: number;
    offerPrice: number;
    quantity: number;
    cartMinQuantity: string;
    cartMaxQuantity: string;
    hsn: string;
    mpn: string;
    barcode: string;
    isDefault: string;
    status: string;
    isExcel: boolean;
    createdAt: string;
    updatedAt: string;
    itemCode: number;
    __v: number;
    productVariantAttributes: Array<{}>;
    productSpecification: Array<{}>;
    variantImageGallery: Array<{
        _id: string;
        galleryImageUrl: string;
        variantId: string;
        status: string;
        statusAt: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    }>;
    country: Array<{}>;
}

export interface ProductFormFieldProps {
    _id?: string;
    productTitle: string;
    sku: string;
    showOrder?: string;
    productCategory: any;
    brand: string;
    pageTitle?: string,
    metaTitle?: string,
    metaKeywords?: string,
    metaDescription?: string,
    ogTitle?: string,
    ogDescription?: string,
    twitterTitle?: string,
    twitterDescription?: string,
    imageGallery?: any[],
    measurements?: {
        weight?: string;
        hight?: string;
        length?: string;
        width?: string;
    };
    // warehouse?: string;
    unit?: string;
    description: string;
    longDescription?: string;
    productImage?: string | File | any;
    galleryImage?: any;
    productImageUrl?: string | null;
    removedGalleryImages?: any;
    completeTab?: any;
    isVariant: string;
    tags: string;
    deliveryDays?: string;
    attributes?: any[];
    productSpecification?: Array<{
        specificationId?: string;
        specificationDetailId?: string;
    }>;
    productSeo?: {
        metaTitle?: string;
        metaKeywords?: string;
        metaDescription?: string;
        ogTitle?: string;
        ogDescription?: string;
        twitterTitle?: string;
        twitterDescription?: string;
    };
    variants: Array<{
        _id?: string;
        countryId: string;
        productVariants: Array<{
            extraProductTitle?: string;
            variantSku: string;
            price: string;
            discountPrice?: string;
            quantity: string;
            isDefault?: string;
            variantDescription?: string;
            cartMinQuantity?: string;
            cartMaxQuantity?: string;
            hsn?: string;
            mpn?: string;
            galleryImage: any
            barcode?: string;
            productVariantAttributes?: Array<{
                attributeId?: string;
                attributeDetailId?: string;
            }>;
            productSpecification?: Array<{
                specificationId?: string;
                specificationDetailId?: string;
            }>;
            productSeo?: {
                metaTitle?: string;
                metaKeywords?: string;
                metaDescription?: string;
                ogTitle?: string;
                ogDescription?: string;
                twitterTitle?: string;
                twitterDescription?: string;
            };
            status?: string;
        }>;
    }>;
}
