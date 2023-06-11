import React, { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const MainNavigation: React.FC = () => {
  const { user, logout } = useAuth();
  const clickHandler = async () => {
    await logout();
  };
  const wrapperRef = React.useRef<any>(null);

  const [showNav, setShowNav] = React.useState(false);

  const clickHandler2 = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setTimeout(() => {
          setShowNav(false);
        }, 100);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full text-secondary-900 ">
      <nav>
        <div className="flex flex-row justify-between bg-primary-900  mb-50 px-5 py-5 gap-4">
          <div className="text-3xl whitespace-nowrap">Next Todos</div>
          <ul className="[&>*:hover]:text-secondary-500 text-3xl  flex-row gap-5 justify-between hidden lg:flex whitespace-nowrap">
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="/todos">All Todos</Link>
            </li>
            <li>
              <Link href="/new-todo">New Todos</Link>
            </li>
            {user && (
              <li>
                <Link onClick={clickHandler} href="/">
                  Logout
                </Link>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <Link href="/auth">Login</Link>
                </li>
                <li>
                  <Link href="/sign-up">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
          <span
            className={`lg:hidden cursor-pointer text-3xl  ${
              showNav ? " animate-fade-in-down" : "animate-fade-in-up"
            }`}
            onClick={clickHandler2}
          >
            {"\u2630"}
          </span>
        </div>

        <div className="lg:hidden">
          {showNav && (
            <ul
              ref={wrapperRef}
              onClick={clickHandler2}
              className={`lg:hidden flex flex-col gap-5 justify-between  p-3 text-1x1 
               bg-primary-800 w-1/3 float-right rounded-b  ${
                 showNav ? "animate-menu-down" : "animate-menu-up"
               } [&>*:hover]:text-secondary-500 `}
            >
              <li>
                <Link href="/">Home Page</Link>
              </li>
              <li>
                <Link href="/todos">All Todos</Link>
              </li>
              <li>
                <Link href="/new-todo">New Todos</Link>
              </li>
              {user && (
                <li>
                  <Link onClick={clickHandler} href="/">
                    Logout
                  </Link>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <Link href="/auth">Login</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
