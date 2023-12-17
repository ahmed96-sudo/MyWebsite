'use client'

import "../globals.css"
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}

const Header = () => {
    useEffect(() => {
        var hamb = document.getElementById("hamb");
        var hambline = document.getElementById("hambline");
        var menu = document.getElementById("menu");
        var navb = document.getElementById("navb");
        var butn = document.getElementById("butn");
        var hea = document.getElementById("hea");
        hamb.addEventListener("click", function () {
            // chck1.style.backgroundColor = "#CBF380";
            // chck2.style.backgroundColor = "#999";
            // chck3.style.backgroundColor = "#999";
            // testi1.classList.replace("right-[200%]", "right-[0%]")
            // testi2.classList.replace("right-[0%]", "right-[-100%]")
            // testi3.classList.replace("right-[0%]", "right-[-200%]")
            // hamb.classList.toggle("bg-transparent");
            // hambline.classList.toggle("bg-transparent");
            // menu.classList.toggle("flex");
            // menu.classList.toggle("flex-col");
            // menu.classList.toggle("items-center");
            // navb.classList.toggle("flex-col");
            // navb.classList.toggle("pl-[55px]");
            // navb.classList.toggle("w-full");
            // navb.classList.toggle("items-baseline");
            // butn.classList.toggle("h-[100px]");
            // butn.classList.toggle("justify-center");
            // butn.classList.toggle("w-full");
            hea.style.height = hea.style.height === '300px' ? '' : '300px';
            hamb.style.background = hamb.style.background === 'transparent' ? '' : 'transparent';
            hambline.style.background = hambline.style.background === 'transparent' ? '' : 'transparent';
            menu.style.display = menu.style.display === 'flex' ? '' : 'flex';
            menu.style.maxHeight = menu.style.maxHeight === '100%' ? 'none' : '100%';
            menu.style.flexDirection = menu.style.flexDirection === 'column' ? '' : 'column';
            menu.style.alignItems = menu.style.alignItems === 'center' ? '' : 'center';
            navb.style.flexDirection = navb.style.flexDirection === 'column' ? '' : 'column';
            navb.style.paddingLeft = navb.style.paddingLeft === '55px' ? '' : '55px';
            navb.style.width = navb.style.width === '100%' ? '' : '100%';
            navb.style.alignItems = navb.style.alignItems === 'baseline' ? '' : 'baseline';
            butn.style.height = butn.style.height === '100px' ? '' : '100px';
            butn.style.justifyContent = butn.style.justifyContent === 'center' ? '' : 'center';
            butn.style.width = butn.style.width === '100%' ? '' : '100%';
            hambline.classList.toggle("rotaft");
            hambline.classList.toggle("rotbef");
        });
    }, []);
    return (
        <header className="bg-[#4831d4]">
            <div id="hea" className="containe h-[100px] flex flex-row bg-transparent transition-[height]">
                <div className="w-[20%] h-full flex justify-start items-center">
                    <Image
                        src="/logofinal.png"
                        alt="Logo"
                        className="h-[100px] w-[100px]"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                {/* <input type="checkbox" className="side-menu" id="side-menu" /> */}
                <div id="menu" className="menu w-[80%] h-full flex justify-around">
                    <nav id="navb" className="flex flex-row w-[60%] h-full justify-center items-center">
                        <Link className="mr-[30px] text-[20px] hover:font-bold text-white hover:text-[#CBF380] font-mono" href="/">Home</Link>
                        <Link className="mr-[30px] text-[20px] hover:font-bold text-white hover:text-[#CBF380] font-mono" href="/portfolio">Portfolio</Link>
                        <Link className="mr-[30px] text-[20px] hover:font-bold text-white hover:text-[#CBF380] font-mono text-center" href="/about">About Me</Link>
                        <Link className="mr-[30px] text-[20px] hover:font-bold text-white hover:text-[#CBF380] font-mono" href="/blog">Blog</Link>
                        <Link className="text-[20px] hover:font-bold text-white hover:text-[#CBF380] font-mono" href="/services">Services</Link>
                    </nav>
                    <div id="butn" className="butn w-[20%] h-full flex justify-end items-center">
                        <Link className="h-[50px] w-[150px] flex justify-center items-center bg-transparent border border-white rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono" href="/contact">Let&apos;s Talk</Link>
                    </div>
                </div>
                <div id="hamb" className="hamb hidden max-sm:block" htmlFor="side-menu"><span id="hambline" className="hamb-line"></span></div>
            </div>
        </header>
    )
}
export default Header;