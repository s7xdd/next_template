import { WEBSITE_ROUTES } from "@/config/website/routes";
import { useAuthStore } from "@/store/auth/auth-store";
import { LoginFormProps } from "@/types/auth/auth";
import { loginFormSchema } from "@/utils/validators/auth/auth-schema";
import { useRouter } from "next/navigation";
import { useState } from "react";

function useLoginHandler () {
    const router = useRouter();

    const { login} = useAuthStore();

    const [loginData, setLoginData] = useState({
        data: {},
        isSubmitting: false,
    });

    const initialLoginValues: LoginFormProps = {
        username: "",
        password: "",   
    }

    const handleSubmit = async (values: any) => {
        setLoginData({
            ...loginData,
            isSubmitting: true,
        });

        const { data, error } = await login(values);

        if (data) {
            router.push(WEBSITE_ROUTES.pages.dashboard)
            setLoginData({
                ...loginData,
                data: data,
                isSubmitting: false,
            });
        } else {
            setLoginData({
                ...loginData,
                isSubmitting: false,
            });
            throw error;
        }

        setLoginData({
            ...loginData,
            isSubmitting: false,
            data: data
        });
    };

    return {
        initialLoginValues,
        handleSubmit,
        loginData,
        loginFormSchema,
    };
};

export default useLoginHandler;
