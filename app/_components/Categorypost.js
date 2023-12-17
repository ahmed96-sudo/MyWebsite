'use client'
import { useEffect } from "react";

const Categorypost = ({ title }) => {
    useEffect(() => {
        var cate = document.getElementById("cate");
        var web = "Web";
        if (title.toLowerCase().includes(web.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Web</span>"
        }
        var Development = "Development";
        if (title.toLowerCase().includes(Development.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Development</span>"
        }
        var Coding = "Coding";
        if (title.toLowerCase().includes(Coding.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Coding</span>"
        }
        var security = "Security";
        if (title.toLowerCase().includes(security.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Security</span>"
        }
        var cybersecurity = "Cybersecurity";
        if (title.toLowerCase().includes(cybersecurity.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Cybersecurity</span>"
        }
        var tips = "Tips";
        if (title.toLowerCase().includes(tips.toLowerCase())) {
            cate.innerHTML = cate.innerHTML + "<span class='p-[10px] border border-[#999] bg-[#4831d4] mr-[10px]'>Tips</span>"
        }
    }, []);
    return (
        <p id="cate" className="h-auto flex flex-row items-center justify-normal text-[18px] font-[600] max-md:flex-col"><span className="mr-[10px]">Categories:</span> </p>
    );
}

export default Categorypost;