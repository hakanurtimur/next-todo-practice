import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const ProtectorRout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
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
