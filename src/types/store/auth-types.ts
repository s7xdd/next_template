import { LoginFormProps } from "../auth/auth";

export interface AuthState {
  user: UserProps | null;
  token: string | null;
  login: (userData: LoginFormProps) => Promise<{ data: LoginResponseProps; error: any }>;
  logout: () => void;
}

export interface LoginResponseProps {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data: UserProps;
}

export interface UserProps {
  token: any;
  id: number;
  email: string;
  nicename: string;
  firstName: string;
  lastName: string;
  displayName: string;
}
