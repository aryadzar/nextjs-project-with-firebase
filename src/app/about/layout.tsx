import { Children } from "react";

export default function AboutLayout({children} : {children : React.ReactNode}){
    return (
        <>
            {/* <nav className="fixed left-0 top-100 z-10 h-screen w-60 bg-gray-800">
                <ul className=" text-white px-5 py-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav> */}
            <div>
            {children}
            </div>
        </>
    )
}