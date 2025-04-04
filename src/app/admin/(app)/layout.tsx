"use client";

import { USER_TYPES } from "@/constants/admin/auth/auth-constants";
import withRoleGuard from "@/guards/role-guard";
import HydrogenLayout from "@/layout/hydrogen/layout";
import { Fragment } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

const ProtectedLayout = withRoleGuard<LayoutProps>(
  DefaultLayout,
  USER_TYPES.superadmin
);

export default ProtectedLayout;

function LayoutProvider({ children }: LayoutProps) {
  return (
    <Fragment>
      <HydrogenLayout>{children}</HydrogenLayout>
    </Fragment>
  );
}
