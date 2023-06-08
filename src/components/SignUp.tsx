import React from "react";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";

const SignUp: React.FC = () => {

    const router = useRouter();
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)

    const {signUp} = useAuth()

    const submitHandler = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const enteredEmail = emailRef.current!.value;
        if (enteredEmail.trim().length === 0) {
            // throw an error
            return;
        }
        const enteredPassword = passwordRef.current!.value;
        if(enteredPassword.trim().length === 0){
            return
        }

        try {
            await signUp(enteredEmail, enteredPassword)
        }catch(e) {
            console.log(e)
        }
        await router.push('/')

    }

    return <form onSubmit={submitHandler} className='flex flex-col justify-between items-center text-blue-950 p-3 w-6/12 m-auto gap-2 border-2 border-b-blue-950'>
        <label htmlFor="email">Email</label>
        <input className='bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50' type="email" id="email" ref={emailRef}/>
        <label htmlFor="password">Password</label>
        <input className='bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50' type="password" id="password" ref={passwordRef}/>
        <button type="submit" className='bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50 border-2 border-b-blue-950'>Sign Up</button>
    </form>


}

export default SignUp;