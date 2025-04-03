"use client";

import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

interface AuthWrapperProps {
  children: ReactNode;
  title: string;
}

export default function AuthWrapper({ children, title }: AuthWrapperProps) {
  return (
    <>
      <section className="bg-white dark:bg-dark-2 flex flex-wrap min-h-[100vh]">
        <div className="lg:w-1/2 lg:block hidden">
          <div className="flex items-center flex-col h-full justify-center">
            <img src="/auth-img.png" alt="" />
          </div>
        </div>
        <div className="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
          <div className="lg:max-w-[464px] mx-auto w-full">
            <div>
              <a href="index.html" className="mb-2.5 max-w-[290px]">
                <img src="assets/images/logo.png" alt="" />
              </a>
              <h4 className="mb-3">Sign In to your Account</h4>
              <p className="mb-8 text-secondary-light text-lg">Welcome back! please enter your detail</p>
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
