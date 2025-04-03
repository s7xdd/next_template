import { apiClient } from "../setup/api-setup";



export const getDashboardApi = async (): Promise<any> => {
    const params = {
        countryId: ""
    }
    try {
        const response = await apiClient.get("", { params });
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


