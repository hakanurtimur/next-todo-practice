import React, {createContext, useContext, useEffect, useState} from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "@firebase/auth";
import {auth} from '@/config/firebase'






export const AuthContext = createContext<any>({});


export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({children}: { children: React.ReactNode }) => {




    const [user, setUser] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                setUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    }
                )
            } else {
                setUser(null)
            }
            setIsLoading(false)
        })

        return () => unsubscribe()

    }, [])


    const logout = async () => {
        setUser(null)
        return await signOut(auth)
    }
    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email)
    }


    return (
        <AuthContext.Provider value={{user, login, logout, signUp, forgetPassword}}>
            {isLoading ? null : children}
        </AuthContext.Provider>
    )
}