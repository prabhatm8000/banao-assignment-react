const AddPostBtn = () => {
    return (
        <button className="block md:hidden  fixed end-0 bottom-0 m-6 p-5 rounded-full bg-gradient-to-b from-red-500 to-pink-500">
            <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                    fill="white"
                />
            </svg>
        </button>
    );
};

export default AddPostBtn;
