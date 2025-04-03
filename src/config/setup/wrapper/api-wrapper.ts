import { toast } from "react-toastify";

export async function handleApiRequest<T>(
  apiCall: () => Promise<T>,
  toastSuccess = false,
  toastError = false,
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const data: any = await apiCall();
    if (toastSuccess) {
      toast.success(data?.message);
    }
    return { data, error: null };
  } catch (error: any) {
    console.log("API Error Object:", error);

    const { errorMsg } = handleApiErrorMessage(error);

    if (toastError) {
      toast.error(errorMsg);
    }
    console.error("Final Processed Error:", errorMsg);

    return { data: null, error };
  }
}

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
