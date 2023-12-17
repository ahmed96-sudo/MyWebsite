'use client'

import "../globals.css"
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react"
{/* <Image
              src="/vercel.svg"
              alt=""
              className=""
              width={100}
              height={24}
              priority
            /> */}

const Services = () => {
    const [arrWebName, setarrWebName] = useState([]);
    const [arrCyberName, setarrCyberName] = useState([]);
    const [arrWebImg, setarrWebImg] = useState([]);
    const [arrCyberImg, setarrCyberImg] = useState([]);
    const firstcolname = [{"name": String(arrWebName[0]), "img": String(arrWebImg[0])},{"name": String(arrCyberName[0]), "img": String(arrCyberImg[0])}];
    const secondcolname = [{"name": String(arrWebName[1]), "img": String(arrWebImg[1])},{"name": String(arrCyberName[1]), "img": String(arrCyberImg[1])}];
    const thirdcolname = [{"name": String(arrWebName[2]), "img": String(arrWebImg[2])},{"name": String(arrCyberName[2]), "img": String(arrCyberImg[2])}];
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/servdata?name=mixhome')
            .then(response => response.json())
            .then(data => {
                setarrWebName(data.webname);
                setarrCyberName(data.cybername);
                setarrWebImg(data.webimg);
                setarrCyberImg(data.cyberimg);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        getData();
    }, []);
    return (
        <section className="bg-[#F5F4FC]">
            <div className="h-[500px] containe max-md:h-[700px]">
                <div className="h-[105px] w-full flex flex-col justify-center items-center mt-[20px] text-[#4831d4]">
                    <h1 className="text-[55px] font-[800] font-[monospace]">Services</h1>
                    <h3>Here are the Services I Provide to You.</h3>
                </div>
                <div className="h-[300px] w-full flex flex-row items-center justify-around max-md:flex-col max-md:h-[500px]">
                    <div className="h-full w-[280px] flex flex-col justify-center items-center">
                        {firstcolname.map((obj,id) => (
                            <div key={id} className="h-[35%] w-[280px] bg-[#4c5063] text-white flex flex-row justify-evenly items-center rounded-[10px] hover:scale-[1.1] transition-all duration-300 max-[768px]:w-[210px] max-md:w-[280px] my-[10px]" style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                                <Image
                                    src={"/" + obj.img}
                                    alt="code Logo"
                                    className="h-[50px] w-[50px]"
                                    width={100}
                                    height={24}
                                />
                                <p className="text-[17px] font-semibold max-[768px]:text-[13px] max-md:text-[17px]">{obj.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="h-full w-[280px] flex flex-col justify-center items-center">
                        {secondcolname.map((obj,id) => (
                            <div key={id} className="h-[35%] w-[280px] bg-[#4c5063] text-white flex flex-row justify-evenly items-center rounded-[10px] hover:scale-[1.1] transition-all duration-300 max-[768px]:w-[210px] max-md:w-[280px] my-[10px]" style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                                <Image
                                    src={"/" + obj.img}
                                    alt="code Logo"
                                    className="h-[50px] w-[50px]"
                                    width={100}
                                    height={24}
                                />
                                <p className="text-[17px] font-semibold max-[768px]:text-[13px] max-md:text-[17px]">{obj.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="h-full w-[280px] flex flex-col justify-center items-center">
                        {thirdcolname.map((obj,id) => (
                            <div key={id} className="h-[35%] w-[280px] bg-[#4c5063] text-white flex flex-row justify-evenly items-center rounded-[10px] hover:scale-[1.1] transition-all duration-300 max-[768px]:w-[210px] max-md:w-[280px] my-[10px]" style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                                <Image
                                    src={"/" + obj.img}
                                    alt="code Logo"
                                    className="h-[50px] w-[50px]"
                                    width={100}
                                    height={24}
                                />
                                <p className="text-[17px] font-semibold max-[768px]:text-[13px] max-md:text-[17px]">{obj.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[60px] w-full flex justify-center items-center">
                    <Link className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold border border-[#4831d4] text-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono" href="/services">View All</Link>
                </div>
            </div>
        </section>
    )
}
export default Services;