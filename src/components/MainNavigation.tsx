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
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full">
      <nav>
        <div className="flex flex-row justify-between bg-blue-800 text-blue-50 mb-50 px-3 py-5 gap-4">
          <div className="text-3xl whitespace-nowrap">Next Todos</div>
          <ul className="text-3xl  flex-row gap-5 justify-between hidden lg:flex whitespace-nowrap">
            <li>
              <Link className="hover:text-blue-200" href="/">
                Home Page
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-200" href="/todos">
                All Todos
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-200" href="/new-todo">
                New Todos
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  onClick={clickHandler}
                  className="hover:text-blue-200"
                  href="/"
                >
                  Logout
                </Link>
              </li>
            )}
            {!user && (
              <>
                <li>
                  <Link className="hover:text-blue-200" href="/auth">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-200" href="/sign-up">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <span
            className="lg:hidden cursor-pointer text-3xl"
            onClick={clickHandler2}
          >
            {"\u2630"}
          </span>
        </div>

        <div className="lg:hidden bg-opacity-90 bg-blue-800 w-1/4 float-right rounded-b ">
          {showNav && (
            <ul
              ref={wrapperRef}
              onClick={clickHandler2}
              className="lg:hidden flex flex-col gap-5 justify-between w-80 p-3 text-1x1"
            >
              <li>
                <Link className="hover:text-blue-200" href="/">
                  Home Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-200" href="/todos">
                  All Todos
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-200" href="/new-todo">
                  New Todos
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    onClick={clickHandler}
                    className="hover:text-blue-200"
                    href="/"
                  >
                    Logout
                  </Link>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <Link className="hover:text-blue-200" href="/auth">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-200" href="/sign-up">
                      Sign Up
                    </Link>
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
