import { useState } from "react";
import { postData } from "../assets/data/postData";
import Post from "./Post";
import locationSvg from "../assets/images/location.svg";
import editIconSvg from "../assets/images/edit-icon.svg";
import infoIconSvg from "../assets/images/info-icon.svg";
import thumbsupIconSvg from "../assets/images/thumbsup.svg";
import { recommendedGroups } from "../assets/data/recommendedGroups";
import GroupCard from "./GroupCard";

const PostSection = ({
    options,
    onSelect,
}: {
    options: string[];
    onSelect: (option: any) => void;
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    const [isJoinGroupOpen, setIsJoinGroupOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsFilterOpen(!isFilterOpen);

    const handleJoinGroupBtn = () => {
        setIsJoinGroupOpen(!isJoinGroupOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsFilterOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="container mx-auto xl:max-w-[1300px] sm:px-2">
            {/* header mobile */}
            <div className="flex md:hidden justify-between items-center p-3 md:py-6">
                <span className="font-bold text-lg md:text-xl">Posts(368)</span>

                <div className="relative inline-block text-left font-semibold">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center items-center w-full bg-gray-100 shadow-sm px-4 py-2 font-medium focus:outline-none"
                            onClick={toggleDropdown}
                        >
                            {"Filter: " + selectedOption}
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
                        </button>
                    </div>

                    {isFilterOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* header desktop */}
            <div className="sticky top-16 bg-white">
                <div className="hidden md:flex items-center justify-between container mx-auto mb-6 px-2 pt-6 border-b border-gray-300">
                    <ul className="flex items-center justify-between gap-4 text-lg">
                        {options.map((option) => {
                            if (option === selectedOption) {
                                return (
                                    <li
                                        key={option}
                                        role="menuitem"
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                        className="font-bold text-xl py-4 border-b border-black cursor-pointer"
                                    >
                                        {option} Post(32)
                                    </li>
                                );
                            }
                            return (
                                <li
                                    key={option}
                                    role="menuitem"
                                    onClick={() => handleOptionClick(option)}
                                    className="py-4 text-black/80 cursor-pointer"
                                >
                                    {option}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex justify-between gap-4">
                        <button
                            type="button"
                            className="flex justify-center items-center rounded-md w-[150px] bg-gray-200/80 shadow-sm px-4 py-2 font-medium focus:outline-none"
                        >
                            Write a Post
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
                        </button>

                        <button
                            onClick={handleJoinGroupBtn}
                            type="button"
                            className={`flex justify-center items-center gap-3 rounded-md shadow-sm py-2 px-3 font-medium focus:outline-none ${
                                isJoinGroupOpen
                                    ? "border border-gray-400 text-gray-500"
                                    : "bg-blue-600 text-white"
                            }`}
                        >
                            {isJoinGroupOpen ? (
                                <>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z"
                                            fill="#6A6A6B"
                                        />
                                    </svg>
                                    Leave Group
                                </>
                            ) : (
                                <>
                                    <svg
                                        width="22"
                                        height="13"
                                        viewBox="0 0 22 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Join Group
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* posts */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] gap-10 lg:gap-20 justify-center">
                {/* posts */}
                <div className="flex flex-col gap-4 justify-center">
                    {postData.map((post) => {
                        return <Post key={post.id} postData={post} />;
                    })}
                </div>

                {/* sidebar */}
                <div className="p-4 hidden md:flex flex-col gap-10 sticky top-44 h-fit overflow-y-auto">
                    <form className="flex justify-center items-center w-full h-fit border-b border-gray-300 px-2">
                        <img
                            src={locationSvg}
                            alt="location-icon"
                            width={18}
                            height={18}
                        />
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="w-full px-4 py-2 text-lg font-semibold focus:outline-none"
                        />
                        <img
                            src={editIconSvg}
                            alt="edit-icon"
                            className="my-1"
                            width={20}
                            height={20}
                        />
                    </form>
                    <div className="flex items-start justify-start gap-2">
                        <img
                            src={infoIconSvg}
                            alt="info-icon"
                            className="my-1"
                            width={18}
                            height={18}
                        />
                        <span className="w-fit text-gray-500">
                            Your location will help us serve better and extend a
                            personalised experience.
                        </span>
                    </div>

                    <div>
                        <h6 className="w-full inline-flex items-center gap-2">
                            <span>
                                <img
                                    src={thumbsupIconSvg}
                                    alt="info-icon"
                                    className="my-1"
                                    width={18}
                                    height={18}
                                />
                            </span>
                            <span className="uppercase">
                                Recommended Groups
                            </span>
                        </h6>

                        <div className="space-y-3">
                            {recommendedGroups.map((groupData) => {
                                return <GroupCard key={groupData.id} groupData={groupData} />;
                            })}

                            <span className="text-blue-600 float-end">
                                See More...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostSection;
