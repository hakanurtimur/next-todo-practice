import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import AuthContextModel from "@/models/authContextModel";

const ProtectorRout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth() as AuthContextModel;
  const router = useRouter();

  useEffect(() => {
    if (
      !user &&
      router.pathname !== "/auth" &&
      router.pathname !== "/sign-up"
    ) {
      router.push("/auth").then();
    }
  }, [user, router]);

  return <div>{user ? children : null}</div>;
};

export default ProtectorRout;
