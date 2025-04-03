import { COUNTRY_ID, STATUS_ENUM } from "@/constants/common/common-constants";
import { apiClient } from "../setup/api";
import { apiEndpoints } from "../setup/api-endpoints";
import { ParamsProps } from "@/types/common";
import { handleApiRequest } from "../setup/api-wrapper";


export const getDashboardApi = async (): Promise<any> => {
    const params = {
        countryId: COUNTRY_ID.uae
    }
    try {
        const response = await apiClient.get(apiEndpoints.pages.dashboard, { params });
        if (response?.data?.error) {
            throw response.data;
        }
        return response.data;
    } catch (error: any) {
        if (error && error.message) {
            throw error;
        } else {
            throw new Error("An unexpected error occurred. Please try again.");
        }
    }
};

export const getProductsApi = async (params?: ParamsProps): Promise<any> => {
    try {
        const response = await apiClient.get(apiEndpoints.product.productlist, { params });
        if (response?.data?.error) {
            throw response.data;
        }
        return response.data;
    } catch (error: any) {
        if (error && error.message) {
            throw error;
        } else {
            throw new Error("An unexpected error occurred. Please try again.");
        }
    }
};


