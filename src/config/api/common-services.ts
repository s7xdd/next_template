import { ParamsProps } from "@/types/common";
import { apiClient, apiServer } from "../setup/api-setup";
import { apiEndpoints } from "../setup/api-setup/api-endpoints";
import { SEOProps } from "@/types/seo-types";

export const handleCommonApi = async <T>(
  apiType: string,
  method: "get" | "post" | "delete",
  id?: string,
  data?: any,
  params?: ParamsProps,
  isStatusChange?: boolean,
  authRequired?: boolean,
): Promise<T> => {
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

    const apiService = authRequired ? apiServer : apiClient;

    const response = await apiService[method](endpoint, payload, config);

    if (response?.data?.error) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMetaData = async (url: string) => {
  const endpoint = apiEndpoints.metadata.metadata;
  const params = {
    url: process.env.NEXT_PUBLIC_BASE_URL + url,
  };
  try {
    const response: SEOProps = await apiClient.get(endpoint, { params });

    if (response && response.data) {
      return {
        title: response.data?.json?.title,
        description: response.data?.json?.description,
        keywords: response.data?.json?.description,
        icons: {
          icon: "/favicon.png",
        },
        openGraph: {
          // og:
          title: response.data?.json?.og_title,
          description: response.data?.json?.og_description,
          url: `${process.env.NEXT_PUBLIC_APP_URL}`,
          images: "/favicon.png",
          // siteName: response.data?.json?.og_site_name,
          // images: {
          //   url: imgIs,
          //   width: 800,
          //   height: 600,
          // },
          locale: response.data?.json?.og_locale,
          type: response.data?.json?.og_type,
        },
      };
    } else {
      return {
        title: "Ecommerce Frontend",
        description: "",
        icons: {
          icon: "/favicon.png",
        },
        openGraph: {
          title: "Ecommerce Frontend",
          description: "",
          images: "/favicon.png",
        },
      };
    }
  } catch (error) {
    console.log("error", error);
    return {
      title: "Ecommerce Frontend",
      description: "",
      icons: {
        icon: "/favicon.png",
      },
      openGraph: {
        title: "Ecommerce Frontend",
        description: "",
        images: "/favicon.png",
      },
    };
  }
};
