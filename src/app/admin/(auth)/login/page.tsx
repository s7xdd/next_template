"use client";

import LoginForm from "@/src/components/auth/login-form";
import AuthWrapper from "@/src/components/auth/wrapper/auth-wrapper";


export default function AdminLogin() {
  return (
    <AuthWrapper title="Admin Login">
      <LoginForm />
    </AuthWrapper>
  );
}
