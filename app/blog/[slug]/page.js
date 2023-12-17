import Image from "next/image";
import Link from "next/link";
import Imageforpost from "../../_components/Imageforpost";
import Determinecontent from "../../_components/Determinecontent";
import Categorypost from "../../_components/Categorypost";
import Linksshare from "../../_components/Linksshare";

export const metadata = {
    title: 'Blog',
    description: 'Ahmed Blog.',
}

const page = ({  params }) => {
    metadata.title = (params.slug).replace(/-/g, " ");
    metadata.description = (params.slug).replace(/-/g, " ");
    return (
    <section>
        <div className="title&Metadata">
            <h1 className="title text-[50px] text-[#4831d4] font-[600] font-mono max-md:text-[30px] text-center my-[40px]">{(params.slug).replace(/-/g, " ")}</h1>
            <hr className="w-[70%] my-[20px] mx-auto border-t-black"/>
            <div className="Metadata h-[70px] w-[70%] flex flex-row items-center justify-between mx-auto max-md:flex-col max-md:h-[110px] max-md:w-full">
                <Link href={"/about"} target="_blank" className="flex flex-row">
                    <Image
                        src="/ahmed.jpg"
                        alt="Ahmed Saeed"
                        className="h-[70px] w-[70px] rounded-[50%]"
                        width={100}
                        height={24}
                    />
                    <h4 className="font-[600] text-[20px] my-auto ml-[10px] text-[#4831d4]">Ahmed Saeed</h4>
                </Link>
                <h6 className="font-[700] text-[17px] text-[#4831d4]">Published: <span id="pubtime">October 10, 2023</span></h6>
            </div>
            <hr className="w-[70%] my-[20px] mx-auto border-t-black"/>
        </div>
        <Imageforpost title={(params.slug).replace(/-/g, " ")} />
        <Determinecontent title={(params.slug).replace(/-/g, " ")} />
        <div className="tags h-[50px] w-[70%] mx-auto max-md:h-[120px]">
            <Categorypost title={(params.slug).replace(/-/g, " ")}/>
        </div>
        <div className="Social Media Links max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center w-[70%] mx-auto my-[20px]">
            <h1 className="text-[27px] font-[600] my-[5px] text-[#4831d4]">Don't forget to share this post!</h1>
            <Linksshare />
        </div>
    </section>
    )
}

export default page;