import { handleCommonApi } from "@/config/api/common-services";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import { ParamsProps } from "@/types/common";
import { debounce } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useCommonHandler = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const { handleSearchInput,
        handleFilterChange,
        handleApplyFilters,
        filterValues,
        textInput,
        params,
        clearFilter,
        applyFilters } = useFilterFunctions()

    // Edit mode functions
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleEditCancel = () => {
        setIsEditing(false);
    };

    // Form submission
    const handleFormSubmit = async ({ data, endpoint, id, formatter, successCallback }: {
        data: any,
        endpoint: string,
        id?: string,
        formatter?: (data: any) => any,
        successCallback?: () => void
    }) => {
        setIsSubmitting(true);

        const formattedData = formatter ? formatter(data) : data;

        const { data: response, error } = await handleApiRequest(
            () => handleCommonApi(endpoint, "post", id, formattedData),
            true
        );
        setIsSubmitting(false);

        if (response) {
            setIsEditing(false);
            if (successCallback) successCallback();
            return true;
        } else {
            throw error;
        }
    };

    // Reusable status change handler
    const handleStatusChange = async ({ id, newStatus, endpoint, refreshCallback }: {
        id: string,
        newStatus: string,
        endpoint: string,
        refreshCallback?: () => void
    }) => {
        try {
            const { data: response, error } = await handleApiRequest(
                () => handleCommonApi<boolean>(endpoint, "post", id, newStatus, undefined, true),
                true,
                true
            );

            if (response) {
                if (refreshCallback) refreshCallback();
                return true;
            } else {
                throw error;
            }
        } catch (error) {
            console.error("Status change error:", error);
            return false;
        }
    };

    return {
        handleSearchInput,
        handleFilterChange,
        handleApplyFilters,
        filterValues,
        textInput,
        params,
        clearFilter,
        applyFilters,

        // Edit mode functionality
        isEditing,
        isSubmitting,
        toggleEditMode,
        handleEditCancel,

        // Form submission and status change
        handleFormSubmit,
        handleStatusChange
    };
};




//Filter Functions
const useFilterFunctions = () => {
    const [filterValues, setFilterValues] = useState<ParamsProps>({});
    const [textInput, setTextInput] = useState<string>("");

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchParamsString = searchParams.toString();

    const [params, setParams] = useState<ParamsProps>({
        ...Object.fromEntries(searchParams.entries()),
    });

    useEffect(() => {
        const newParams = {
            ...Object.fromEntries(searchParams.entries()),
        };

        setParams(newParams);
    }, [searchParamsString]);

    const updateUrlParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());

        if (value && value.trim() !== "") {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }

        newParams.set("page_size", "1");

        router.push(`${pathname}?${newParams.toString()}`);
    };

    const debouncedSearch = debounce((key: string, value: string) => {
        updateUrlParams(key, value);
    }, 500);

    const handleSearchInput = (key: string, value: string) => {
        setTextInput(value);
        debouncedSearch(key, value);
    };

    const handleFilterChange = (key, value) => {
        setFilterValues(prev => ({
            ...prev,
            [key]: value
        }));
    };


    const clearFilter = () => {
        setFilterValues({});
        router.push(`${pathname}`);
    };

    const applyFilters = (filterValues: Record<string, any>) => {
        const newParams = new URLSearchParams(searchParams.toString());

        Object.entries(filterValues).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                newParams.set(key, String(value));
            } else {
                newParams.delete(key);
            }
        });

        newParams.set("page_size", "1");

        router.push(`${pathname}?${newParams.toString()}`);
    };

    const handleApplyFilters = () => {
        applyFilters(filterValues);
    };

    return {
        handleSearchInput,
        handleFilterChange,
        handleApplyFilters,
        filterValues,
        textInput,
        params,
        clearFilter,
        applyFilters,
    }

}