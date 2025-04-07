import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../cart/use-cart";
import { useAuthStore } from "@/store/auth/auth-store";
import { LoginFormProps } from "@/types/store/auth-types";
import { WEBSITE_ROUTES } from "@/config/website/routes";

export const useLogin = (isCheckout?: boolean) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpProps, setOtpProps] = useState<any>({});
  const router = useRouter();

  const { getCart } = useCart();

  const initialValues: LoginFormProps = {
    username: "",
    password: "",
  };

  const handleLoginFormSubmit = async (LoginData: LoginFormProps) => {
    console.log("LoginDataLoginData", LoginData);
    setIsSubmitting(true);
    const { data, error, isVerified } = await useAuthStore.getState().login(LoginData);

    console.log("data", data);

    if (error) {
      setIsSubmitting(false);
      throw error;
    }

    if (data && data.user) {
      if (isVerified) {
        setIsLoggedIn(true);
        getCart();
        if (!isCheckout) {
          router.push(WEBSITE_ROUTES.pages.home);
        }
      } else {
        setOtpProps(data?.user);
        setShowOtpField(true);
      }
    }
    setIsSubmitting(false);
  };

  return { initialValues, handleLoginFormSubmit, isSubmitting, showOtpField, otpProps, isLoggedIn };
};
