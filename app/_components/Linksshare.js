'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Linksshare = () => {
    useEffect(() => {
        var loc = window.location.href;
        var url1 = "https://www.facebook.com/sharer.php?u=" + loc;
        var face = document.getElementById("face");
        face.setAttribute("href", url1);
        var url2 = "https://twitter.com/intent/tweet?url=" + loc;
        var tweet = document.getElementById("tweet");
        tweet.setAttribute("href", url2);
        var url3 = "https://www.linkedin.com/sharing/share-offsite/?url=" + loc;
        var linked = document.getElementById("linked");
        linked.setAttribute("href", url3);
    }, []);
    return (
        <div className="flex flex-row ml-[30px]">
            <Link id="face" target="_blank" href={""} className="mr-[20px] hover:scale-[1.1] transition-all duration-150">
                <Image
                    src="/facebook.svg"
                    alt="facebook Logo"
                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                    width={50}
                    height={50}
                />
            </Link>
            <Link id="tweet" target="_blank" href={""} className="mr-[20px] hover:scale-[1.1] transition-all duration-150">
                <Image
                    src="/twitter.png"
                    alt="twitter Logo"
                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                    width={50}
                    height={50}
                />
            </Link>
            <Link id="linked" target="_blank" href={""} className="mr-[20px] hover:scale-[1.1] transition-all duration-150">
                <Image
                    src="/linkedin.svg"
                    alt="linkedin Logo"
                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    );
}

export default Linksshare;