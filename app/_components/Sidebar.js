'use client'
import { useEffect } from "react";
import "../blog/glob.css"
import Image from "next/image";
import Link from "next/link";
import Linksshare from "./Linksshare";

const Sidebar = () => {
    useEffect(() => {
        // var loc = window.location.href;
        // console.log(loc);
        // var url1 = "https://www.facebook.com/sharer.php?u=" + loc;
        // var face = document.getElementById("face");
        // face.href = url1;
        // var url2 = "https://twitter.com/intent/tweet?url=" + loc;
        // var tweet = document.getElementById("tweet");
        // tweet.href = url2;
        var ham = document.getElementById("ham");
        var hamline = document.getElementById("hamline");
        var fil = document.getElementById("fil");
        // var navb = document.getElementById("navb");
        // var butn = document.getElementById("butn");
        // var hea = document.getElementById("hea");
        ham.addEventListener("click", function () {
            ham.style.background = ham.style.background === 'transparent' ? '' : 'transparent';
            hamline.style.background = hamline.style.background === 'transparent' ? '' : 'transparent';
            fil.style.display = fil.style.display === 'block' ? '' : 'block';
            // fil.style.maxHeight = fil.style.maxHeight === '100%' ? 'none' : '100%';
            fil.style.height = fil.style.height === 'auto' ? '' : 'auto';
            hamline.classList.toggle("rotaft");
            hamline.classList.toggle("rotbef");
        });
        var forsearch = document.getElementsByClassName("forsearch");
        var searchform = document.getElementById("searchform");
        searchform.addEventListener("submit", function (e) {
            e.preventDefault();
            var searchinp = document.getElementById("searchinp").value;
            for (var i = 0; i < forsearch.length; i++) {
                var text = forsearch[i].textContent;
                if (text.toLowerCase().includes(searchinp.toLowerCase())) {
                    forsearch[i].parentElement.parentElement.parentElement.style.display = "block";
                } else {
                    forsearch[i].parentElement.parentElement.parentElement.style.display = "none";
                }
            }
        });
        var web = document.getElementById("web");
        var forcat = document.getElementsByClassName("forcat");
        web.addEventListener("click", function () {
            if (web.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(web.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var Development = document.getElementById("Development");
        Development.addEventListener("click", function () {
            if (Development.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(Development.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var Coding = document.getElementById("Coding");
        Coding.addEventListener("click", function () {
            if (Coding.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(Coding.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var security = document.getElementById("security");
        security.addEventListener("click", function () {
            if (security.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(security.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var cybersecurity = document.getElementById("cybersecurity");
        cybersecurity.addEventListener("click", function () {
            if (cybersecurity.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(cybersecurity.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var tips = document.getElementById("tips");
        tips.addEventListener("click", function () {
            if (tips.checked == true) {
                for (var i = 0; i < forcat.length; i++) {
                    var text = forcat[i].textContent;
                    if (text.toLowerCase().includes(tips.value.toLowerCase())) {
                        forcat[i].style.display = "block";
                    } else {
                        forcat[i].style.display = "none";
                    }
                }
            }
        });
        var subform = document.getElementById("subform");
        subform.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("I am Sorry To Say That This Feature Is Not Available Right Now");
            document.getElementById("subform").elements[0].value = "";
            // var email = document.getElementById("subform").elements[0].value;
            // var url = "https://script.google.com/macros/s/AKfycbxm9K7vK9jVH2qY6X4QzZqT2U8XG9ZqJ3kXs1Z1/exec?email=" + email;
            // fetch(url)
            //     .then(d => d.json())
            //     .then(d => {
            //         if (d.result == "success") {
            //             alert("Subscribed Successfully");
            //         } else {
            //             alert("Error");
            //         }
            //     })
            //     .catch(e => {
            //         alert("Error");
            //     });
        });
    }, []);
    return ( <div id="fil" className="sidebar w-[23%] h-full mt-[40px]">
        <div className="Search Bar">
            <h1 className="text-[20px] font-[600] ml-[10px] mb-[10px] text-[#4831d4]">Search for Posts</h1>
            <form id="searchform" className="flex flex-row w-[80%] ml-[10px] max-[768px]:w-[90%]">
                <input id="searchinp" type="search" placeholder="Search for Posts (Title)" name="search" required className="w-[65%] rounded-[20px] pl-[20px] h-[45px] text-[#4831d4] bg-transparent border border-[#999]" />
                <button type="submit" className="h-[45px] w-[35%] flex justify-center items-center bg-transparent rounded-[20px] text-[17px] font-semibold border border-[#4831d4] text-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono ml-[15px]">Search</button>
            </form>
        </div>
        <div className="Categories and Tags">
            <h1 className="text-[20px] font-[600] ml-[10px] my-[5px] text-[#4831d4]">Categories</h1>
            <form className="flex flex-col text-[15px] ml-[30px]">
                <label className="w-fit" htmlFor="web"><input id="web" type="checkbox" value={"web"}/> Web</label>
                <label className="w-fit" htmlFor="Development"><input id="Development" type="checkbox" value={"Development"}/> Development</label>
                <label className="w-fit" htmlFor="Coding"><input id="Coding" type="checkbox" value={"Coding"}/> Coding</label>
                <label className="w-fit" htmlFor="security"><input id="security" type="checkbox" value={"security"}/> Security</label>
                <label className="w-fit" htmlFor="cybersecurity"><input id="cybersecurity" type="checkbox" value={"cybersecurity"}/> Cybersecurity</label>
                <label className="w-fit" htmlFor="tips"><input id="tips" type="checkbox" value={"tips"}/> Tips</label>
            </form>
        </div>
        <div className="Recent Posts">
            <h1 className="text-[20px] font-[600] ml-[10px] my-[5px] text-[#4831d4]">Recent Posts</h1>
            <ul className="list-disc ml-[50px]">
                <li>
                    <Link href={"/blog/WebDevelopmentTrends"} className="hover:text-[#4831d4]">Web Development Trends</Link>
                </li>
                <li>
                    <Link href={"/blog/CodingBest"} className="hover:text-[#4831d4]">Coding Best Practices</Link>
                </li>
                <li>
                    <Link href={"/blog/UXDesign"} className="hover:text-[#4831d4]">UX Design Tips</Link>
                </li>
            </ul>
        </div>
        <div className="Email Subscription Form w-[90%] max-[768px]:w-auto">
            <h1 className="text-[20px] font-[600] text-center mt-[10px] text-[#4831d4]">Subscribe to my Blog</h1>
            <form id="subform" className="flex flex-col w-full mx-auto items-center">
                <input type="email" placeholder="Email Address" name="email" required  className="w-[80%] rounded-[20px] h-[45px] text-[#4831d4] bg-transparent border border-[#999] mb-[20px] mt-[10px] text-center" />
                <button type="submit" className="h-[45px] w-[40%] flex justify-center items-center bg-transparent rounded-[20px] text-[17px] font-semibold border border-[#4831d4] text-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono ml-[15px]">Subscribe</button>
            </form>
        </div>
        <div className="Popular Posts">
            <h1 className="text-[20px] font-[600] ml-[10px] my-[5px] text-[#4831d4]">Popular Posts</h1>
            <div className="flex flex-col justify-between max-md:flex-col max-md:items-center max-md:h-full mb-[40px] pl-[20px]">
                <div className='h-auto w-[90%] hover:scale-[1.1] transition-all duration-400 rounded-[20px] bg-white flex flex-row mb-[30px] max-md:flex-col max-md:w-[80%]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                    <div className='w-[35%] flex justify-center items-center max-md:w-auto'>
                        <Image src="/Web-Development-Trends.jpg" alt="Home Logo" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                    </div>
                    <div className='w-[65%] flex flex-col max-md:w-auto'>
                        <div className='h-[50px] w-full flex justify-center items-center'>
                            <Link className='font-black text-[#4831d4] text-[16px] max-[768px]:text-[15px] max-md:text-[18px]' href="/blog/Web-Development-Trends">Web Development Trends</Link>
                        </div>
                        {/* <div className='h-[100px] w-full max-md:h-auto max-[768px]:overflow-auto'>
                            <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>Explore the latest web development trends that are shaping the digital landscape in 2023. From progressive web apps to serverless architecture, stay ahead of the curve...</p>
                        </div> */}
                        <div className='h-[80px] w-full flex justify-center items-center'>
                            <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href="/blog/Web-Development-Trends">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className='h-auto w-[90%] hover:scale-[1.1] transition-all duration-400 rounded-[20px] bg-white flex flex-row mb-[30px] max-md:flex-col max-md:w-[80%]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                    <div className='w-[35%] flex justify-center items-center max-md:w-auto'>
                        <Image src="/cyber.jpg" alt="cyber Logo" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                    </div>
                    <div className='w-[65%] flex flex-col max-md:w-auto'>
                        <div className='h-[50px] w-full flex justify-center items-center'>
                            <Link className='font-black text-[#4831d4] text-[18px] max-[768px]:text-[15px] max-md:text-[18px]' href="/blog/Cybersecurity-Essentials">Cybersecurity Essentials</Link>
                        </div>
                        {/* <div className='h-[100px] w-full max-md:h-auto max-[768px]:overflow-auto'>
                            <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>Explore the importance of code documentation and version control to streamline collaboration with your team and ensure code reliability...</p>
                        </div> */}
                        <div className='h-[80px] w-full flex justify-center items-center'>
                            <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href="/blog/Cybersecurity-Essentials">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className='h-auto w-[90%] hover:scale-[1.1] transition-all duration-400 rounded-[20px] bg-white flex flex-row max-md:flex-col max-md:w-[80%]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                    <div className='w-[35%] flex justify-center items-center max-md:w-auto'>
                        <Image src="/safety.jpg" alt="Home Logo" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                    </div>
                    <div className='w-[65%] flex flex-col max-md:w-auto'>
                        <div className='h-[50px] w-full flex justify-center items-center'>
                            <Link className='font-black text-[#4831d4] text-[18px]' href="/blog/Online-Safety-Tips">Online Safety Tips</Link>
                        </div>
                        {/* <div className='h-[100px] w-full max-md:h-auto max-[768px]:overflow-auto'>
                            <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>Discover UX design tips to create intuitive and user-friendly digital experiences. From user research to prototyping, unlock the secrets of exceptional design...</p>
                        </div> */}
                        <div className='h-[80px] w-full flex justify-center items-center'>
                            <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href="/blog/Online-Safety-Tips">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Social Media Links max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center">
            <h1 className="text-[20px] font-[600] ml-[10px] my-[5px] text-[#4831d4]">Share With Others</h1>
            {/* <div className="flex flex-row ml-[30px]">
                <Link id="face" target="_blank" href={""} className="mr-[20px] hover:scale-[1.1] transition-all duration-150">
                    <Image
                        src="/facebook.svg"
                        alt="facebook Logo"
                        className="h-[40px] w-[40px] rounded-[50%] bg-white"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
                <Link id="tweet" target="_blank" href={""} className="mr-[20px] hover:scale-[1.1] transition-all duration-150">
                    <Image
                        src="/twitter.png"
                        alt="twitter Logo"
                        className="h-[40px] w-[40px] rounded-[50%] bg-white"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
            </div> */}
            <Linksshare />
        </div>
        <div className="mt-[10px] text-[20px] ml-[10px] max-[768px]:text-center">
            <Link href={"#top"} className="hover:text-[#4831d4]">Back to Top</Link>
        </div>
    </div> )
}

export default Sidebar;