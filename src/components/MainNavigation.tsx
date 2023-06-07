import React from "react";
import Link from "next/link";

const MainNavigation: React.FC = () => {
    return (
        <header className='flex flex-row items-center justify-between bg-blue-800 text-blue-50  px-1.5 py-5 gap-4 rounded'>
            <div>Next Todos</div>
            <nav>
                <ul className='flex flex-row gap-5 justify-between'>
                    <li>
                        <Link className='hover:text-blue-200' href="/">Home Page</Link>
                    </li>
                    <li>
                        <Link className='hover:text-blue-200' href="/todos" >All Todos</Link>
                    </li>
                    <li>
                        <Link className='hover:text-blue-200' href="/new-todo">New Todos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;