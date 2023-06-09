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
    }


    return <form onSubmit={submitHandler}>

        <label htmlFor="email">Email</label>
        <input className='bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50'
               type="email" id="email" ref={enteredRef}/>
        <button type="submit"
                className='bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50 border-2 border-b-blue-950'>Reset
            Password
        </button>

    </form>
}

export default ForgetPassword;