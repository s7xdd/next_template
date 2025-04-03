import { LoginFormProps } from "@/types/auth/auth";
import { apiEndpoints } from "../setup/api-setup/api-endpoints";
import { apiClient } from "../setup/api-setup";



export const loginUserApi = async (userData: LoginFormProps): Promise<any> => {
    try {
        const response = await apiClient.post(apiEndpoints.auth.login, userData);
        if (response?.data?.error) {
            throw response.data;
        }
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};