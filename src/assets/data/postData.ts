export type UserDataType = {
    avatar: string;
    name: string;
};

export type AuthorDataType = {
    avatar: string;
    name: string;
    view: string;
};

export type AdditionalSiteLinkDataType = {
    url: string;
    name: string;
};

export type PostDataType = {
    id: number;
    category: "Article" | "Education" | "Meetup" | "Job" | "Event";
    title: string;
    content?: string;
    meetupDate?: string;
    meetupLocation?: string;
    jobPosition?: string;
    jobLocation?: string;
    additionalSiteLink?: AdditionalSiteLinkDataType[];
    picture?: string;
    author: AuthorDataType;
};

export const loggedInUserData: UserDataType = {
    avatar: "./avatar4.jpg",
    name: "Siddharth Goyal",
};

export const postData: PostDataType[] = [
    {
        id: 1,
        category: "Article",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        content: "I’ve worked in UX for the better part of a decade. F..",
        author: {
            avatar: "./avatar1.jpg",
            name: "Sarthak Kamra",
            view: "1.4k",
        },
        picture: "./post1.jpg",
    },
    {
        id: 2,
        category: "Education",
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        content: "I’ve worked in UX for the better part of a decade. F..",
        author: {
            avatar: "./avatar2.jpg",
            name: "Sarah West",
            view: "4.8k",
        },
        picture: "./post2.jpg",
    },
    {
        id: 3,
        category: "Meetup",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        meetupDate: "Fri, 12 Oct, 2018",
        meetupLocation: "Ahmedabad, India",
        additionalSiteLink: [{ url: "#", name: "Visit Website" }],
        author: {
            avatar: "./avatar3.jpg",
            name: "Ronal Jones",
            view: "800",
        },
        picture: "./post3.jpg",
    },
    {
        id: 4,
        category: "Job",
        title: "Software Developer - II",
        jobPosition: "Innovaccer Analytics",
        jobLocation: "Noida, India",
        additionalSiteLink: [{ url: "#", name: "Apply on Timesjobs" }],
        author: {
            avatar: "./avatar4.jpg",
            name: "Joseph Gray",
            view: "1.7k",
        },
    },
];
