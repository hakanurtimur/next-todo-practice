import User from "./user";
import { UserCredential } from "@firebase/auth";

interface AuthContextModel {
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  forgetPassword: (email: string) => Promise<void>;
}

export default AuthContextModel;
