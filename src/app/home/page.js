'use client'
import Header from "../components/header";
import Background from "../components/Background";


const MainPage = ({ children }) => {
    return (

            <div className="relative w-full min-h-screen">
                <Background />
                <div className="relative z-10 w-full">
                    <Header />
                    <main className="w-full">
                        {children}
                    </main>
                </div>
            </div>


    );
};

export default MainPage;