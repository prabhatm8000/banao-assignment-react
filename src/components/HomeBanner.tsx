import mainBg from "../assets/images/main-bg.jpeg";
import backBtnSvg from "../assets/images/backBtn.svg";
import { useState } from "react";

const HomeBanner = () => {
    const [isJoinGroupOpen, setIsJoinGroupOpen] = useState<boolean>(false);
    const handleJoinGroupBtn = () => {
        setIsJoinGroupOpen(!isJoinGroupOpen);
    };
    return (
        <div className="relative bg-black">
            <img
                src={mainBg}
                className="w-full h-[50vh] object-cover opacity-40"
                alt="main-bg"
            />

            <div className="absolute flex sm:hidden container mx-auto start-0 end-0 top-0 items-center justify-between p-6 text-white">
                <img src={backBtnSvg} width={18} height={18} />
                <button
                    onClick={handleJoinGroupBtn}
                    className="px-3 py-2 bg-transparent text-white rounded-md border border-white"
                >
                    {isJoinGroupOpen ? "Leave Group" : "Join Group"}
                </button>
            </div>

            <div className="absolute container mx-auto xl:max-w-[1300px] start-0 end-0 bottom-14 md:bottom-20 flex flex-col items-start justify-center gap-2 text-white px-3">
                <h2 className="text-2xl sm:text-4xl font-semibold">
                    Computer Engineering
                </h2>
                <p className="text-sm sm:text-[16px]">
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default HomeBanner;
