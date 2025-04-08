"use client";

import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import { isUserVerified } from "@/utils/helper/auth-functions";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  AuthState,
  ChangePasswordFormProps,
  ChangePasswordResponseProps,
  GuestRegisterFormParams,
  GuestRegisterResponseProps,
  LoginResponseProps,
  OTPFormProps,
  OTPResponseProps,
  ResetPasswordFormProps,
  ResetPasswordResponseProps,
  SetPasswordFormProps,
  SetPasswordResponseProps,
} from "@/types/store/auth-types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      userRole: null,
      isVerified: false,
      isAuthenticated: false,
      guestData: null,
      isGuestAuthenticated: false,
      guestToken: null,

      login: async (userData) => {
        const { data, error }: { data: LoginResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.login,
          "post",
          {
            data: userData,
            toastError: true,
            toastSuccess: true,
          },
        );

        const isVerified = isUserVerified(data?.data);
        if (data && data?.data && isVerified) {
          const { token } = data.data;
          set({
            user: data.data,
            token,
            isAuthenticated: isVerified,
            isVerified: isVerified,
          });
        }

        if (data && data?.data?.token) {
          const { token } = data?.data;
          set({
            user: data?.data,
            token,
          });
        }
        return { data, error, isVerified };
      },

      guestRegister: async (guestData: GuestRegisterFormParams) => {
        const { data, error }: { data: GuestRegisterResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.guestregister,
          "post",
          {
            data: guestData,
            toastError: true,
            toastSuccess: true,
          },
        );

        return { data, error };
      },

      verifyOTP: async (OTPData: OTPFormProps) => {
        const { data, error }: { data: OTPResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.verifyotp,
          "post",
          {
            data: OTPData,
            toastError: true,
            toastSuccess: true,
          },
        );

        const { user } = data;

        if (data && user && user?.isverified && !user?.isguest) {
          const { token } = user;
          set({
            user: user,
            token,
            isAuthenticated: user?.isverified,
            isVerified: user?.isverified,
          });
        } else if (data && data?.user && user?.isverified && user?.isguest) {
          set({
            guestData: user,
            guestToken: user?.guesttoken,
            isGuestAuthenticated: user?.isverified,
          });
        }

        return { data, error, isVerified: user?.isverified };
      },

      forgotPassword: async (forgotPasswordFormData: ResetPasswordFormProps) => {
        const { data, error }: { data: ResetPasswordResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.forgotpassword,
          "post",
          {
            data: forgotPasswordFormData,
            toastError: true,
            toastSuccess: true,
          },
        );
        return { data, error };
      },

      setPassword: async (setPasswordFormData: SetPasswordFormProps) => {
        const { data, error }: { data: SetPasswordResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.setpassword,
          "post",
          {
            data: setPasswordFormData,
            toastError: true,
            toastSuccess: true,
          },
        );
        return { data, error };
      },

      changePassword: async (changePasswordFormData: ChangePasswordFormProps) => {
        const { data, error }: { data: ChangePasswordResponseProps; error: any } = await handleApiRequest(
          apiEndpoints.auth.setpassword,
          "post",
          {
            data: changePasswordFormData,
            toastError: true,
            toastSuccess: true,
          },
        );
        get().logout();
        return { data, error };
      },
      logout: async () => {
        set({
          user: null,
          token: null,
          isVerified: false,
          isAuthenticated: false,
          guestData: null,
          isGuestAuthenticated: false,
          guestToken: null,
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
