import React from "react";
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";

const MainNavigation: React.FC = () => {

    const {user, logout} = useAuth();
    const clickHandler = async () => {
        await logout()
    }

    return (
        <header
            className='flex flex-row items-center justify-between bg-blue-800 text-blue-50  px-1.5 py-5 gap-4 rounded'>
            <div>Next Todos</div>
            <nav>
                <ul className='flex flex-row gap-5 justify-between'>
                    <li>
                        <Link className='hover:text-blue-200' href="/">Home Page</Link>
                    </li>
                    <li>
                        <Link className='hover:text-blue-200' href="/todos">All Todos</Link>
                    </li>
                    <li>
                        <Link className='hover:text-blue-200' href="/new-todo">New Todos</Link>
                    </li>
                    {user && <li>
                        <Link onClick = {clickHandler} className='hover:text-blue-200' href='/'>Logout</Link>
                    </li>}
                    {!user &&
                        <>
                            <li>
                                <Link className='hover:text-blue-200' href="/auth">Login</Link>
                            </li>
                            <li>
                                <Link className='hover:text-blue-200' href="/sign-up">Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;