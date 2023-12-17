'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react"

const Blog = () => {
    const [img, setImg] = useState([]);
    const [title, setTitle] = useState([]);
    const [des, setDes] = useState([]);
    const [url, setUrl] = useState([]);
    var col = [];
    for (let r = 0; r < title.length; r++) {
        const ob = {"img" : "", "title" : "", "des" : "", "url" : ""};
        col.push(ob);
    }
    for (let i = 0; i < title.length; i++) {
        const im = img[i];
        const ti = title[i];
        const de = des[i];
        const ur = url[i];
        col[i].img = String(im);
        col[i].title = String(ti);
        col[i].des = String(de);
        col[i].url = String(ur);
    }
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/blogdata?name=home')
            .then(response => response.json())
            .then(data => {
                setImg(data.img);
                setTitle(data.title);
                setDes(data.des);
                setUrl(data.url);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        getData();
    }, []);
    return (
        <section className="bg-[#4831d4] rounded-[30px]">
            <div className="h-[780px] containe max-md:h-auto">
                <div className="h-[105px] w-full flex flex-col justify-center items-center mb-[50px] text-white pt-[40px]">
                    <h1 className="text-[55px] font-[800] font-[monospace]">Blog</h1>
                    <h3>Here are some Posts.</h3>
                </div>
                <div className="flex flex-col h-[500px] max-md:h-[1250px]">
                    <div className="flex justify-between max-md:flex-col max-md:items-center max-md:h-full">
                        {col.map((obj,ide) => (
                            <div key={ide} className='h-[480px] w-[30%] hover:scale-[1.1] transition-all duration-400 rounded-[30px] bg-white max-md:w-[85%] max-md:h-auto' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                                <div className='h-[250px] w-full flex justify-center items-center max-md:h-[150px]'>
                                    <Image src={"/" + obj.img} alt="Post Logo" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                                </div>
                                <div className='w-full flex flex-col max-md:h-[250px] max-md:justify-evenly'>
                                    <div className='h-[40px] w-full flex justify-center items-center max-md:h-auto'>
                                        <Link className='font-black text-[#4831d4] text-[18px] hover:text-[#CBF380] max-[1024px]:text-[15px] max-md:text-[18px]' href={"/" + obj.url}>{obj.title}</Link>
                                    </div>
                                    <div className='h-[100px] w-full max-md:h-auto max-[1024px]:overflow-auto'>
                                        <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>{obj.des}</p>
                                    </div>
                                    <div className='h-[80px] w-full flex justify-center items-center max-md:h-auto'>
                                        <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href={"/" + obj.url}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[80px] w-full flex justify-center items-center mt-[20px]">
                    <Link className="h-[50px] w-[250px] border flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono" href="/blog">Wanna Read More?</Link>
                </div>
            </div>
        </section>
    )
}
export default Blog;