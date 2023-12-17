'use client'

import "../globals.css"
import "../portfol.css"
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react"
{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}

const Portfolio = () => {
    const [name, setName] = useState([]);
    const [img, setImg] = useState([]);
    const [development, setDevelopment] = useState([]);
    const [url, setUrl] = useState([]);
    const [des, setDes] = useState([]);
    var col = [];
    for (let r = 0; r < name.length; r++) {
        const ob = {"name" : "", "img" : "", "development" : true, "url" : "", "des" : ""};
        col.push(ob);
    }
    for (let i = 0; i < name.length; i++) {
        const nam = name[i];
        const im = img[i];
        const develop = development[i];
        const ur = url[i];
        const de = des[i];
        col[i].name = String(nam);
        col[i].img = String(im);
        col[i].development = develop;
        col[i].url = String(ur);
        col[i].des = String(de);
    }
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/portdata?name=mixhome')
            .then(response => response.json())
            .then(data => {
                setName(data.name);
                setImg(data.img);
                setDevelopment(data.development);
                setUrl(data.url);
                setDes(data.des);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        getData();
    }, []);
    return (
        <section className="bg-[#4831d4] rounded-[30px]">
            <div className="h-[600px] containe py-[40px] max-md:h-[1050px]">
                <div className="h-[105px] w-full flex flex-col justify-center items-center mb-[50px] text-white max-md:mb-[15px]">
                    <h1 className="text-[55px] font-[800] font-[monospace] max-md:text-[37px]">My Recent Work</h1>
                    <h3 className="max-md:text-center">Here are a few past projects I've worked on.</h3>
                </div>
                <div className="flex flex-col h-[300px] justify-around max-md:h-[800px]">
                    <div className="flex justify-between max-md:flex-col max-md:items-center max-md:h-full">
                        {col.map((obj,id) => {
                            var dev = "";
                            if (obj.development == true) {
                                dev = <div className='h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer'>In Development</div>;
                            } else {
                                dev = <Link target="_blank" className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono" href={String(obj.url)}>Visit Website</Link>;
                            }
                            return (<div key={id} className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <Image
                                                    src={"/" + obj.img}
                                                    alt=""
                                                    className="h-full w-full flex justify-center items-center rounded-[30px]"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                            <div className="flip-card-back flex justify-center items-center flex-col">
                                                <h1 className="text-center text-[18px] font-semibold mb-[22px]">{String(obj.des)}</h1>
                                                {dev}
                                            </div>
                                        </div>
                                    </div>)
                        })}
                    </div>
                </div>
                <div className="h-[80px] w-full flex justify-center items-center">
                    <Link className="h-[50px] w-[250px] border flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono" href="/portfolio">Look at More</Link>
                </div>
            </div>
        </section>
    )
}
/* <div className="flex justify-between max-md:hidden">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <Image
                    src="/schooldashboard.webp"
                    alt="schooldashboard Logo"
                    className="h-full w-full flex justify-center items-center rounded-[30px]"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flip-card-back flex justify-center items-center flex-col">
                <h1 className="text-center text-[18px] font-semibold mb-[22px]">Efficient School Dashboard: Streamlining Information for Enhanced Educational Management.</h1>
                <div className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer">In Development</div>
            </div>
        </div>
    </div>
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <Image
                    src="/FleetTrackParts.png"
                    alt="FleetTrackParts Logo"
                    className="h-full w-full flex justify-center items-center"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flip-card-back flex justify-center items-center flex-col">
                <h1 className="text-center text-[18px] font-semibold mb-[22px]">Your one-stop shop for Truck Parts, our small store website brings convenience and quality to your doorstep.</h1>
                <div className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer">In Development</div>
            </div>
        </div>
    </div>
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <Image
                    src="/collegewebsite.jfif"
                    alt="collegewebsite Logo"
                    className="h-full w-full flex justify-center items-center rounded-[30px]"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flip-card-back flex justify-center items-center flex-col">
                <h1 className="text-center text-[18px] font-semibold mb-[22px]">Discover our dynamic college website, offering education, resources, and a vibrant community for your academic journey.</h1>
                <div className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer">In Development</div>
            </div>
        </div>
    </div>
</div> */

export default Portfolio;