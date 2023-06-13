import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainNavigation from "@/components/MainNavigation";
import { AuthProvider } from "@/context/AuthContext";
import ProtectorRout from "@/components/ProtectorRout";
import { useRouter } from "next/router";
import TodoContextProvider from "@/context/TodoContext";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const noAuthRequiredPaths = ["/", "/auth", "/sign-up", "/forget-password"];
  const router = useRouter();
  console.log(router.pathname);

  return (
    <AuthProvider>
      <TodoContextProvider>
        <MainNavigation />
        <main>
          {noAuthRequiredPaths.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectorRout>
              <Component {...pageProps} />
            </ProtectorRout>
          )}
        </main>
      </TodoContextProvider>
    </AuthProvider>
  );
}
