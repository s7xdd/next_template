import { toast } from "react-toastify";
import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { apiClient } from "../api-setup";

export const handleApiRequest = async (
  apiType: string,
  method: "get" | "post" | "delete",
  options: {
    id?: string;
    data?: any;
    params?: Record<string, any>;
    toastSuccess?: boolean;
    toastError?: boolean;
    isStatusChange?: boolean;
  } = {},
): Promise<{ data: any | null; error: Error | null }> => {
  const {
    id,
    data,
    params,
    toastSuccess = false,
    toastError = false,
    isStatusChange = false,
  } = options;

  try {
    const endpoint = isStatusChange ? apiEndpoints.status[apiType](id!) : apiType;

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

    const apiService = apiClient;

    const response = await apiService[method](endpoint, payload, config);

    if (response?.data?.error) {
      throw response.data;
    }

    if (toastSuccess && response?.data?.message) {
      toast.success(response.data.message);
    }

    return { data: response.data, error: null };
  } catch (error: any) {
    console.error("API Error Object:", error);

    const errorMsg = handleApiErrorMessage(error);

    if (toastError) {
      toast.error(errorMsg);
    }

    console.error("Final Processed Error:", errorMsg);

    return { data: null, error };
  }
};

export const handleApiErrorMessage = (err: any) => {
  let errorMsg = "An unexpected error occurred";
  if (err?.validation && typeof err.validation === "object") {
    const messages = Object.values(err.validation).filter((msg) => typeof msg === "string");
    if (messages.length) {
      errorMsg = messages.join(", ");
      return { errorMsg };
    }
  } else if (err?.validation && typeof err.validation === "string") {
    errorMsg = err?.validation;
    return { errorMsg };
  }

  if (typeof err?.message === "string") {
    errorMsg = err.message;
  } else if (typeof err?.message === "object") {
    errorMsg = JSON.stringify(err.message);
  } else if (Array.isArray(err?.message)) {
    errorMsg = err.message.join(", ");
  }
  return { errorMsg };
};
