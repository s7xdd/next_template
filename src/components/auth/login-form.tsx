"use client";

import React from "react";
import DynamicForm from "../common/form/form-render/dynamic-form";
import { DynamicFormSectionProps } from "@/types/components/component-types";
import { useLogin } from "@/hooks/auth/use-login-handler";
import { loginFormSchema } from "@/utils/validators/auth/auth-schema";

const LoginForm = () => {
  const { initialValues, handleLoginFormSubmit, isSubmitting } = useLogin();

  const LoginFormFields: DynamicFormSectionProps[] = [
    {
      grids: 1,
      className: "!border-none !p-0",
      fields: [
        {
          name: "username",
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        {
          name: "password",
          label: "Password *",
          type: "password",
          placeholder: "● ● ● ● ● ●",
        },
      ],
    },
  ];

  return (
    <>
      <DynamicForm
        sections={LoginFormFields}
        validationSchema={loginFormSchema}
        onSubmit={handleLoginFormSubmit}
        defaultValues={initialValues}
        isLoading={isSubmitting}
      />
    </>
  );
};

export default LoginForm;
