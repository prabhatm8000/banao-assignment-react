import { useState } from "react";
import facebookIconSvg from "../assets/images/facebook-icon.svg";
import googleIconSvg from "../assets/images/google-icon.svg";
import signInSvg from "../assets/images/sign-in.svg";

const SignIn = ({
    handleCloseBtn,
    changeIsLoggedInState,
}: {
    handleCloseBtn: () => void;
    changeIsLoggedInState: (newState: boolean) => void;
}) => {
    const [formType, setFormType] = useState<"CREATE" | "SIGNIN">("CREATE");

    const changeFormType = () => {
        setFormType(formType === "SIGNIN" ? "CREATE" : "SIGNIN");
    };

    return (
        <>
            <div className="fixed inset-0 z-[99] w-full h-full bg-black/40 flex justify-center items-end md:items-center">
                <div className="fixed z-[100] h-[600px] w-full md:max-w-[750px] bg-white rounded-t-md md:rounded-lg">
                    <button
                        className="absolute hidden md:block end-0 top-0 translate-y-[-150%] z-[101] bg-white rounded-full"
                        onClick={handleCloseBtn}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
                                fill="black"
                            />
                        </svg>
                    </button>

                    <span className="hidden md:block py-4 bg-yellow-50 text-green-600 font-semibold text-sm w-full text-center rounded-t-md">
                        Let's learn, share & inspire each other with our passion
                        for computer engineering. Sign up now 🤘🏼
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-10 py-6 md:py-4">
                        <form className="flex flex-col items-center gap-8 md:mb-5">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-xl md:text-3xl font-bold w-full text-start">
                                    {formType === "SIGNIN"
                                        ? "Sign In"
                                        : "Create Account"}
                                </h2>
                                <button
                                    className="md:hidden bg-white rounded-full"
                                    onClick={handleCloseBtn}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                {formType === "CREATE" && (
                                    <div className="flex justify-between items-center w-full">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                                        />
                                    </div>
                                )}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                                />
                                {formType === "CREATE" && (
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full p-3 font-semibold border border-gray-200 focus:outline-none"
                                    />
                                )}
                            </div>

                            {/* submit button */}
                            <div className="flex justify-between items-center w-full">
                                <button
                                    className="w-48 md:w-64 py-2 text-sm rounded-full bg-blue-600 text-white font-semibold"
                                    type="submit"
                                    onClick={() => {
                                        changeIsLoggedInState(true);
                                        handleCloseBtn();
                                    }}
                                >
                                    {formType === "CREATE" && "Create Account"}
                                    {formType === "SIGNIN" && "Sign In"}
                                </button>
                                <button
                                    className="md:hidden underline"
                                    onClick={changeFormType}
                                >
                                    {formType === "CREATE" && "or, Sign In"}
                                    {formType === "SIGNIN" &&
                                        "or, Create Account"}
                                </button>
                            </div>

                            {/* signin with google and facebook */}
                            <div className="w-full flex flex-col items-center gap-2 text-sm">
                                <a className="w-full py-2 border border-gray-300/60 flex items-center gap-2 justify-center">
                                    <img
                                        width={16}
                                        height={16}
                                        src={facebookIconSvg}
                                        alt="facebook-icon"
                                    />
                                    Sign up with Facebook
                                </a>
                                <a className="w-full py-2 border border-gray-300/60 flex items-center gap-2 justify-center">
                                    <img
                                        width={16}
                                        height={16}
                                        src={googleIconSvg}
                                        alt="google-icon"
                                    />
                                    Sign up with Google
                                </a>
                            </div>

                            {formType === "SIGNIN" && (
                                <button className="text-sm font-semibold">
                                    Forgot Password?
                                </button>
                            )}

                            {formType === "CREATE" && (
                                <span className="md:hidden text-xs text-gray-500 w-full text-center">
                                    By signing up, you agree to our Terms &
                                    conditions, Privacy policy
                                </span>
                            )}
                        </form>

                        <div className="hidden md:flex flex-col justify-between w-full gap-4">
                            <span className="w-full flex items-center justify-end gap-1 text-sm py-2">
                                <span className="text-black/70">
                                    {formType === "CREATE" &&
                                        "Already have an account?"}
                                    {formType === "SIGNIN" &&
                                        "Don’t have an account yet?"}
                                </span>
                                <button
                                    className="text-blue-600 font-semibold"
                                    onClick={changeFormType}
                                >
                                    {formType === "CREATE" && "Sign In"}
                                    {formType === "SIGNIN" &&
                                        "Create new for free!"}
                                </button>
                            </span>
                            <img
                                className="w-full"
                                src={signInSvg}
                                alt="signIn-img"
                            />
                            {formType === "CREATE" && (
                                <span className="text-xs text-gray-500 w-full text-center">
                                    By signing up, you agree to our Terms &
                                    conditions, Privacy policy
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
