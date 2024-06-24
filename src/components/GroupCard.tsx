import { useState } from "react";
import type { GroupDataType } from "../assets/data/recommendedGroups";

const GroupCard = ({ groupData }: { groupData: GroupDataType }) => {
    const [isFollowed, setIsFollowed] = useState<boolean>(groupData.isFollowed);

    const handleFollowBtn = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <div
            key={groupData.id}
            className="flex items-center justify-between gap-4 my-2"
        >
            <div className="flex items-center gap-3 my-2">
                <img
                    src={groupData.avatar}
                    alt="group-avatar"
                    className="size-10 rounded-full object-cover"
                />
                <span className="text-lg line-clamp-1">{groupData.name}</span>
            </div>
            <button
                onClick={handleFollowBtn}
                className={`${
                    isFollowed ? "bg-black text-white" : "bg-gray-200/70"
                } rounded-full px-4 py-1 text-sm`}
            >
                {isFollowed ? "Followed" : "Follow"}
            </button>
        </div>
    );
};

export default GroupCard;
