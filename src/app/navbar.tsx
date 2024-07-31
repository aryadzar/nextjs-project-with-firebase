"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){
    const pathName = usePathname();
    const router  = useRouter();
    return (
        <nav className=" flex bg-gray-700 py-6 px-5 justify-between">
            <h1 className="text-white">Navbar</h1>
            <div className="flex">
                <ul className="flex ml-5">
                    <Link href={"/"}>
                        <li className={`mr-6 ${pathName === "/" ?  'text-blue-300' : "text-white"} text-white cursor-pointer`}> Home</li>
                    </Link>
                    <Link href={"/about"}>
                        <li className={`mr-6 ${pathName === "/about" ?  'text-blue-300' : "text-white"} text-white cursor-pointer`}>About</li>
                    
                    </Link>
                    <Link href={"/about/profile"}>
                        <li className={`mr-6 ${pathName === "/about/profile" ?  'text-blue-300' : "text-white"} text-white cursor-pointer`}>Profile</li>
                    </Link>
                </ul>
            </div>
            <div className="flex">
                <button className="bg-white rounded-lg px-5 cursor-pointer text-sm"
                onClick={() => router.push('/login')}
                >Login</button>
            </div>
        </nav>
    )
}