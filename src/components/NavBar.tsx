import { loggedInUserData, postData } from "../assets/data/postData";
import logoSvg from "../assets/images/logo-with-title.svg";
import searchIconSvg from "../assets/images/search-icon.svg";

const NavBar = ({
    handleSignInBtn,
    isLoggedInState,
}: {
    handleSignInBtn?: () => void;
    isLoggedInState: boolean;
}) => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between container p-5 mx-auto">
                <a href="#">
                    <img src={logoSvg} alt="logo" />
                </a>

                <form className="hidden sm:flex items-center w-52 md:w-80 lg:w-96 bg-gray-100 rounded-full">
                    <button className="ps-4 pe-2 py-2 bg-transparent">
                        <img
                            src={searchIconSvg}
                            alt="searchIcon"
                            width={18}
                            height={18}
                        />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for your favorite groups in ATG"
                        className="px-4 py-2 w-full bg-transparent text-sm placeholder:text-gray-500 font-semibold focus:outline-none"
                    />
                </form>

                <div className="font-semibold space-x-1 flex items-start">
                    {isLoggedInState ? (
                        <>
                            <div className="flex items-center gap-3">
                                <img
                                    width={30}
                                    height={30}
                                    className="size-10 rounded-full object-cover"
                                    src={loggedInUserData.avatar}
                                    alt={loggedInUserData.name + "-avatar"}
                                />
                                <span className="font-bold">
                                    {loggedInUserData.name}
                                </span>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337H5.83325Z"
                                        fill="#000"
                                    />
                                </svg>
                            </div>
                        </>
                    ) : (
                        <>
                            <span className="hidden sm:block">
                                Create account.
                            </span>
                            <button
                                onClick={handleSignInBtn}
                                className="text-blue-600 hidden sm:block"
                            >
                                It’s free!
                            </button>
                            <button
                                onClick={handleSignInBtn}
                                className="text-blue-600 block sm:hidden"
                            >
                                Sign in
                            </button>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337H5.83325Z"
                                    fill="#000"
                                />
                            </svg>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
