// 'use client'

import "./glob.css"
import Image from "next/image";
// import { useEffect } from "react";
import Link from "next/link";
import Loadblog from "../_components/Loadblog"
import Sidebar from "../_components/Sidebar";
import Blogdata from "../_components/Blogdata";
{/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
            /> */}

export const metadata = {
    title: 'Blog',
    description: 'Ahmed Blog',
}
const Blogpage = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="w-full flex flex-row max-[768px]:h-auto max-[768px]:flex-col">
                <Sidebar />
                <div className="blog w-[75%] h-full max-[768px]:w-auto">
                    <div id="ham" className="ham hidden max-[768px]:block" htmlFor="side-menu"><span id="hamline" className="ham-line"></span></div>
                    <h1 className="text-center text-[55px] font-[800] font-[monospace] text-[#4831d4] my-[40px]" id="top">Blog</h1>
                    <Blogdata />
                </div>
            </div>
        </section>
    )
}
export default Blogpage;

{/* <div className="flex justify-between max-md:flex-col max-md:items-center max-md:h-full">
    
</div> */}