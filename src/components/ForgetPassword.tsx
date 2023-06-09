import React from "react";
import {useAuth} from "@/context/AuthContext";


const ForgetPassword: React.FC = () => {
    const enteredRef = React.useRef<HTMLInputElement>(null);
    const {forgetPassword} = useAuth();
    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredEmail = enteredRef.current!.value;
        if (enteredEmail.trim().length === 0) {
            // throw an error
            return;
        }

        try {
            await forgetPassword(enteredEmail)
        } catch (e) {
            console.log(e)
        }

        setTimeout(() => {
            window.location.href = '/auth'
            window.alert('Check your email for reset password link')
        }, 1000)
    }


    return <form className='flex flex-col justify-between items-center text-blue-950 p-3 w-full m-auto gap-2'
                 onSubmit={submitHandler}>

        <label className='w-8/12 m-1' htmlFor="email">Email Address</label>
        <input
            className='bg-blue-200 m-2 p-3 rounded w-8/12 shadow-blue-900 hover:bg-blue-100 active:bg-blue-50 disabled:opacity-50'
            type="email" id="email" ref={enteredRef}/>
        <button type="submit"
                className='w-8/12 bg-blue-300 m-2 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50 border-2 border-b-blue-950'>Reset
            Password
        </button>

    </form>
}

export default ForgetPassword;