import { toast } from "react-toastify";
import { ParamsProps } from "@/types/common";
import { apiClient } from "../setup/api";
import { apiEndpoints } from "../setup/api-endpoints";

export const handleCommonApi = async <T>(
    apiType: string,
    method: "get" | "post" | "delete",
    id?: string,
    data?: any,
    params?: ParamsProps,
    isStatusChange?: boolean
): Promise<T> => {
    try {
        const endpoint = isStatusChange
            ? apiEndpoints.status[apiType](id!)
            : apiType;


        let payload: any = {};
        let config: any = {};

        if (method === "get") {
            payload = { params };
        } else if (isStatusChange) {
            payload = { status: data?.toString() };
        } else if (data instanceof FormData) {
            payload = data;
            config.headers = { "Content-Type": "multipart/form-data" };
        } else {
            payload = data;
        }

        const response = await apiClient[method](endpoint, payload, config);

        if (response?.data?.error) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};




//Change status common api
// export const changeStatusApi = async (
//     entityType: string,
//     id: string,
//     status: string
// ): Promise<any> => {
//     try {
//         const endpoint = apiEndpoints.status[entityType](id);
//         console.log("countrycountrycountrycountrycountrycountrycountrycountry", endpoint)

//         const response = await apiClient.post(`${endpoint}`, { status: status.toString() })

//         if (response?.data?.error) {
//             throw response.data;
//         }
//         return response.data;
//     } catch (error: any) {
//         if (error && error.message) {
//             throw error;
//         } else {
//             throw new Error("An unexpected error occurred. Please try again.");
//         }
//     }
// };


// //For most common Api's
// export const handleCommonApi = async <T>(
//     endpoint: string,
//     method: "get" | "post" | "delete",
//     id?: string,
//     data?: any,
//     params?: ParamsProps | undefined
// ): Promise<T> => {
//     try {
//         const response = await apiClient[method](
//             endpoint + (id ? `/${id}` : ""),
//             method === "get" ? { params } : { data, params }
//         );

//         if (response?.data?.error) {
//             throw new Error(response.data.error);
//         }

//         return response.data;
//     } catch (error: any) {
//         const errorMessage = error?.message || "An unexpected error occurred. Please try again.";
//         throw new Error(errorMessage);
//     }
// };
