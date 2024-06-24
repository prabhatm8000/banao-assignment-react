export type GroupDataType = {
    id: number;
    name: string;
    avatar: string;
    isFollowed: boolean;
};

export const recommendedGroups: GroupDataType[] = [
    {
        id: 1,
        name: "Leisure",
        avatar: "./grp-avatar1.jpg",
        isFollowed: false,
    },
    {
        id: 2,
        name: "Activism",
        avatar: "./grp-avatar2.jpg",
        isFollowed: false,
    },
    {
        id: 3,
        name: "MBA",
        avatar: "./grp-avatar3.jpg",
        isFollowed: false,
    },
    {
        id: 4,
        name: "Philosophy",
        avatar: "./grp-avatar4.jpg",
        isFollowed: false,
    },
];
