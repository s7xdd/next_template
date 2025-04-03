"use client";

import LoginForm from "@/components/auth/login-form";
import AuthWrapper from "@/components/auth/wrapper/auth-wrapper";

export default function AdminLogin() {
  return (
    <AuthWrapper title="Admin Login">
      <LoginForm />
    </AuthWrapper>
  );
}
