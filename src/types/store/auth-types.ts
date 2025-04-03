import { LoginFormProps } from "../auth/auth";

export interface AuthState {
  user: UserProps | null;
  token: string | null;
  userRole: string | null;
  login: (userData: LoginFormProps) => Promise<{ data: LoginResponseProps; error: any }>;
  logout: () => void;
}


export interface LoginResponseProps {
  requestedData: {
    userData: UserProps;
    languages: any[];
  };
  message: string;
  status: boolean;
}

export interface UserProps {
  userTypeId: {
    _id: string;
    userTypeName: string;
    slug: string;
  };
  firstName: string;
  email: string;
  phone: string;
  token: string;
  privilages: any;
  websiteLogoUrl: string;
} 