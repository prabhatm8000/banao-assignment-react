import { useState } from "react";
import AddPostBtn from "../components/AddPostBtn";
import HomeBanner from "../components/HomeBanner";
import NavBar from "../components/NavBar";
import PostSection from "../components/PostSection";
import SignIn from "../components/SignIn";

const Home = () => {
    const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleSignInBtn = () => {
        setIsSignInOpen(!isSignInOpen);
    };

    return (
        <div className="pb-20">
            <NavBar
                isLoggedInState={isLoggedIn}
                handleSignInBtn={handleSignInBtn}
            />

            {isSignInOpen && (
                <SignIn
                    changeIsLoggedInState={(newState) =>
                        setIsLoggedIn(newState)
                    }
                    handleCloseBtn={() => setIsSignInOpen(false)}
                />
            )}

            <HomeBanner />
            <PostSection
                options={["All", "Article", "Event", "Education", "Job"]}
                onSelect={(option) => console.log(option)}
            />
            <AddPostBtn />
        </div>
    );
};

export default Home;
