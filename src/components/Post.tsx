import type { PostDataType } from "../assets/data/postData";
import optionIconSvg from "../assets/images/option.svg";
import shareIconSvg from "../assets/images/share-icon.svg";
import articleSvg from "../assets/images/article.svg";
import educationSvg from "../assets/images/education.svg";
import meetupSvg from "../assets/images/meetup.svg";
import jobSvg from "../assets/images/job.svg";
import locationSvg from "../assets/images/location.svg";
import dateSvg from "../assets/images/date.svg";
import viewIconSvg from "../assets/images/view-icon.svg";
import { useState } from "react";

const Post = ({ postData }: { postData: PostDataType }) => {
    const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);

    const toggleOptionDropdown = () => setIsOptionOpen(!isOptionOpen);

    // option btn handlers
    const handleEditBtn = () => {
        console.log("edit");
    };
    const handleReportBtn = () => {
        console.log("report");
    };
    const handleOtherBtn = () => {
        console.log("other option btn");
    };

    return (
        <div className="space-y-4 border border-gray-300 rounded-md">
            {/* post data */}
            <div>
                {postData.picture && (
                    <img
                        src={postData.picture}
                        alt="post-picture"
                        className="w-full h-[120px] sm:h-[150px] md:h-[220px] object-cover rounded-t-md"
                    />
                )}
                <div className="px-4 py-2 space-y-3">
                    <span className="text-black/60 flex items-center gap-2">
                        <img
                            src={
                                postData.category === "Article"
                                    ? articleSvg
                                    : postData.category === "Education"
                                    ? educationSvg
                                    : postData.category === "Meetup"
                                    ? meetupSvg
                                    : jobSvg
                            }
                            width={16}
                            height={16}
                            alt="category-icon"
                        />
                        <span className="font-semibold">
                            {postData.category}
                        </span>
                    </span>
                    <div className="flex justify-between items-center gap-6">
                        <h3 className="text-xl font-bold leading-[1.2]">
                            {postData.title}
                        </h3>
                        <div className="relative inline-block text-left font-semibold">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex justify-center items-center w-full bg-gray-100 shadow-sm px-4 py-2 font-medium focus:outline-none"
                                    id="options-menu"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                    onClick={toggleOptionDropdown}
                                >
                                    <img
                                        src={optionIconSvg}
                                        alt="category-icon size-6"
                                    />
                                </button>
                            </div>

                            {isOptionOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => handleEditBtn()}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => handleReportBtn()}
                                        >
                                            Report
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => handleOtherBtn()}
                                        >
                                            Other options
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {postData.content && (
                        <p className="text-lg leading-[1.2]">
                            {postData.content}
                        </p>
                    )}

                    {postData.meetupDate && postData.meetupLocation && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between">
                            <span className="text-black/60 font-semibold flex items-center gap-2">
                                <img
                                    src={dateSvg}
                                    width={14}
                                    height={14}
                                    alt="date-icon"
                                />
                                <span className="text-black/80 line-clamp-1">
                                    {postData.meetupDate}
                                </span>
                            </span>

                            <span className="text-black/60 font-semibold flex items-center gap-2">
                                <img
                                    src={locationSvg}
                                    width={14}
                                    height={14}
                                    alt="loaction-icon"
                                />
                                <span className="text-black/80">
                                    {postData.meetupLocation}
                                </span>
                            </span>
                        </div>
                    )}

                    {postData.jobPosition && postData.jobLocation && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between">
                            <span className="text-black/60 font-semibold flex items-center gap-2">
                                <img
                                    src={dateSvg}
                                    width={14}
                                    height={14}
                                    alt="date-icon"
                                />
                                <span className="text-black/80 line-clamp-1">
                                    {postData.jobPosition}
                                </span>
                            </span>

                            <span className="text-black/60 font-semibold flex items-center gap-2">
                                <img
                                    src={locationSvg}
                                    width={14}
                                    height={14}
                                    alt="loaction-icon"
                                />
                                <span className="text-black/80">
                                    {postData.jobLocation}
                                </span>
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* additional site link */}
            {postData.additionalSiteLink && (
                <div className="flex flex-col items-center justify-between px-6 py-2">
                    {postData.additionalSiteLink.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className={`w-full px-4 py-2 text-center rounded-xl border border-gray-400 font-bold ${
                                postData.category === "Meetup"
                                    ? "text-amber-600"
                                    : postData.category === "Job"
                                    ? "text-green-600"
                                    : "text-black"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            {/* author data */}
            <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                    <img
                        width={50}
                        height={50}
                        className="size-12 rounded-full object-cover"
                        src={postData.author.avatar}
                        alt={postData.author.name + "-avatar"}
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">
                            {postData.author.name}
                        </span>
                        <span className="font-semibold text-sm text-gray-600/70 block md:hidden">
                            {postData.author.view} views
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <span className="hidden md:flex items-center gap-2">
                        <img
                            src={viewIconSvg}
                            className="size-4"
                            alt="view-icon"
                        />
                        <span className="font-semibold text-sm text-gray-600/70 hidden md:block">
                            {postData.author.view} views
                        </span>
                    </span>
                    <button className="flex items-center gap-1 bg-gray-200/60 px-2 py-1">
                        <img
                            src={shareIconSvg}
                            className="size-5"
                            alt="share-icon"
                        />
                        <span className="block md:hidden">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
