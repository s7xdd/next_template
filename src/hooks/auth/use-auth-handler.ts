import { useAuthStore } from "@/store/auth/auth-store";
import { ChangePasswordFormProps } from "@/types/store/auth-types";
import { useState } from "react";

export const useAuthHandler = () => {
    const initialChangePasswordValues = useState({
        email: '',
        current_password: "",
        new_password: "",
        confirm_password: "",
    });


    const handleChangePassword = async (changePasswordData: ChangePasswordFormProps) => {
        await useAuthStore.getState().changePassword(changePasswordData);
    }

    return { initialChangePasswordValues, handleChangePassword }
}

