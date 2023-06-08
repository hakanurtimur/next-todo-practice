import React, {useEffect} from "react";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";

const ProtectorRout = ({children}: { children: React.ReactNode }) => {
    const {user} = useAuth()
    const router = useRouter()
    console.log(router)

    useEffect(() => {
        if(!user && router.pathname !== '/auth' && router.pathname !== '/sign-up') {
            router.push('/auth')
            console.log(router)
        }
    }, [user, router])


    return <div>{user ? children: null}</div>
}

export default ProtectorRout;