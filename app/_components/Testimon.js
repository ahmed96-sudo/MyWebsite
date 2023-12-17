'use client'

// import "../globals.css"
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
{/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
            /> */}

const Testimon = () => {
    useEffect(() => {
        var chck1 = document.getElementById("chck1");
        var chck2 = document.getElementById("chck2");
        var chck3 = document.getElementById("chck3");
        var testi1 = document.getElementById("testi1");
        var testi2 = document.getElementById("testi2");
        var testi3 = document.getElementById("testi3");
        chck1.addEventListener("click", function () {
            chck1.style.backgroundColor = "#CBF380";
            chck2.style.backgroundColor = "#999";
            chck3.style.backgroundColor = "#999";
            testi1.classList.replace("right-[200%]", "right-[0%]")
            testi2.classList.replace("right-[0%]", "right-[-100%]")
            testi3.classList.replace("right-[0%]", "right-[-200%]")
        });
        chck2.addEventListener("click", function () {
            chck1.style.backgroundColor = "#999";
            chck2.style.backgroundColor = "#CBF380";
            chck3.style.backgroundColor = "#999";
            testi1.classList.replace("right-[0%]", "right-[200%]")
            testi2.classList.replace("right-[-100%]", "right-[0%]")
            testi2.classList.replace("right-[100%]", "right-[0%]")
            testi3.classList.replace("right-[0%]", "right-[-200%]")
        });
        chck3.addEventListener("click", function () {
            chck1.style.backgroundColor = "#999";
            chck2.style.backgroundColor = "#999";
            chck3.style.backgroundColor = "#CBF380";
            testi1.classList.replace("right-[0%]", "right-[200%]")
            testi2.classList.replace("right-[0%]", "right-[100%]")
            testi3.classList.replace("right-[-200%]", "right-[0%]")
        });
    }, []);
    return (
        <section className="h-[550px] bg-white max-md:h-[670px]">
            <div className="h-[105px] w-full flex flex-col justify-center items-center text-[#4831d4] pt-[40px]">
                <h1 className="text-[55px] font-[800] font-[monospace] max-md:text-[45px]">Testimonials</h1>
                <h3 className="max-md:text-center">People I've worked with have said some nice things...</h3>
            </div>
            <div className="h-[400px] w-full flex flex-row overflow-hidden relative max-md:h-[520px]">
                <div id="testi1" className="absolute w-full right-[0%] h-full flex flex-col items-center justify-center transition-all duration-200">{/*right:200%*/}
                    <Image
                        src="/ayman.jpg"
                        alt="Vercel Logo"
                        className="h-[150px] w-[150px] rounded-[50%]"
                        width={100}
                        height={24}
                    />
                    <p className="w-[700px] text-[20px] text-[#3d155f] mt-[10px] mb-[30px] text-center max-md:w-auto max-md:px-[10px]">“Ahmed was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of Developer you can trust with a project from start to finish.”</p>
                    <h1 className="text-[1.25rem] font-extrabold text-[#4831d4] mb-[0.5rem]">Ayman Doukhelli</h1>
                    <p className="text-[1rem] text-[#3d155f] font-normal">CEO, Hashmap</p>
                </div>
                <div id="testi2" className="absolute w-full right-[-100%] h-full flex flex-col items-center justify-center transition-all duration-200">
                    <Image
                        src="/person.png"
                        alt="Vercel Logo"
                        className="h-[150px] w-[150px] rounded-[50%]"
                        width={100}
                        height={24}
                    />
                    <p className="w-[700px] text-[20px] text-[#3d155f] mt-[10px] mb-[30px] text-center max-md:w-auto max-md:px-[10px]">“Ahmed's a clear communicator with the tenacity and confidence to really dig in to tricky Development scenarios and the collaborative friction that's needed to produce excellent work.”</p>
                    <h1 className="text-[1.25rem] font-extrabold text-[#4831d4] mb-[0.5rem]">Youssef Mohamed</h1>
                    <p className="text-[1rem] text-[#3d155f] font-normal">Developer, Freelancer</p>
                </div>
                <div id="testi3" className="absolute w-full right-[-200%] h-full flex flex-col items-center justify-center transition-all duration-200">
                    <Image
                        src="/youssef.jpg"
                        alt="Vercel Logo"
                        className="h-[150px] w-[150px] rounded-[50%]"
                        width={100}
                        height={24}
                    />
                    <p className="w-[700px] text-[20px] text-[#3d155f] mt-[10px] mb-[30px] text-center max-md:w-auto max-md:px-[10px]">“Ahmed is a top-notch Full-Stack Web Developer. His expertise in both front-end and back-end development is impressive. He delivered our project on time with exceptional quality.”</p>
                    <h1 className="text-[1.25rem] font-extrabold text-[#4831d4] mb-[0.5rem]">Youssef ElAbyad</h1>
                    <p className="text-[1rem] text-[#3d155f] font-normal">CEO, Record.</p>
                </div>
            </div>
            <div className="h-[10px] flex flex-row w-full justify-center items-center">
                <label id="chck1" className="h-[15px] w-[15px] block border-[2px] border-[#999] rounded-[50%] cursor-pointer transition-all duration-200 mx-[5px] bg-[#CBF380]" htmlFor="check1"></label>
                <label id="chck2" className="h-[15px] w-[15px] block border-[2px] border-[#999] rounded-[50%] cursor-pointer transition-all duration-200 mx-[5px] bg-[#999]" htmlFor="check2"></label>
                <label id="chck3" className="h-[15px] w-[15px] block border-[2px] border-[#999] rounded-[50%] cursor-pointer transition-all duration-200 mx-[5px] bg-[#999]" htmlFor="check3"></label>
            </div>
        </section>
    )
}
export default Testimon;