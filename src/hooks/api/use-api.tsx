"use client";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import { ParamsProps } from "@/types/common";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { toast } from "react-toastify";

const useApi = (
  apiFunction: (params?: ParamsProps, slug?: string) => Promise<any>,
  defaultParams: ParamsProps | null = null,
  slug?: string,
  autoFetch: boolean = false,
  toastSuccess: boolean = false,
  toastError: boolean = true,
) => {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const [params, setParams] = useState<ParamsProps>({
    ...defaultParams,
    page_size: 1,
    ...Object.fromEntries(searchParams.entries()),
  });

  const [shouldFetch, setShouldFetch] = useState(autoFetch);
  const isInitialMount = useRef(true);

  const fetchData = useCallback(
    async (overrideParams?: any) => {
      setStatus("loading");
      setError(null);

      const finalParams = overrideParams ?? params;

      const { data, error } = await handleApiRequest(() => apiFunction(finalParams, slug), toastSuccess, toastError);

      if (error || data?.error) {
        const errorMessage = data?.message || "An unexpected error occurred.";
        setError(errorMessage);
        setStatus("error");
      } else {
        setData(data);
        setStatus("success");
      }
    },
    [apiFunction, params, slug, searchParams],
  );

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false);
    }
  }, [shouldFetch, fetchData]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const newParams = {
      ...defaultParams,
      page_size: params.page_size,
      ...Object.fromEntries(searchParams.entries()),
    };

    setParams(newParams);
    fetchData(newParams);
  }, [searchParamsString]);

  const triggerRequest = (newParams?: ParamsProps) => {
    console.log("newParamsnewParams", newParams);
    setParams(newParams ?? params);
    setShouldFetch(true);
  };

  return { data, error, status, triggerRequest, params };
};

export default useApi;
