import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import MainNavigation from "@/components/MainNavigation";
import {AuthProvider} from "@/context/AuthContext";
import ProtectorRout from "@/components/ProtectorRout";
import {useRouter} from "next/router";
import TodoContextProvider from "@/context/TodoContext";


export default function App({Component, pageProps}: AppProps) {
    const noAuthRequiredPaths = ['/', '/auth', '/sign-up'];
    const router = useRouter();
    console.log(router.pathname);


    return <AuthProvider>
        <TodoContextProvider>
            <MainNavigation/>

            {(noAuthRequiredPaths.includes(router.pathname) ? <Component {...pageProps} /> : <ProtectorRout>
                <Component {...pageProps} />
            </ProtectorRout>)}
        </TodoContextProvider>

    </AuthProvider>
}
