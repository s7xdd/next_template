"use client";

import { apiEndpoints } from "@/config/setup/api-setup/api-endpoints";
import { handleApiRequest } from "@/config/setup/wrapper/api-wrapper";
import { AuthState, LoginResponseProps } from "@/types/store/auth-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      userRole: null,
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

        //REAL LOGIN
        if (data && data?.requestedData) {
          const { token } = data.requestedData?.userData;
          set({
            user: data?.requestedData?.userData,
            token,
          });
        }

        return { data, error };
      },

      logout: () =>
        set({
          user: null,
          token: null,
          userRole: null,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
