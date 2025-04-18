"use client";

import React from "react";
import useLoginHandler from "@/hooks/auth/use-login-handler";
import DynamicForm from "../common/form/form-render/dynamic-form";
import { DynamicFormSectionProps } from "@/types/components/table-types";

const LoginForm = () => {
  const { initialLoginValues, handleSubmit, loginData, loginFormSchema } = useLoginHandler();

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
        onSubmit={handleSubmit}
        defaultValues={initialLoginValues}
        isLoading={loginData.isSubmitting}
      />
    </>
  );
};

export default LoginForm;
