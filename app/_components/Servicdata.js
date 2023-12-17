'use client'

import "../portfol.css";
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

const Servicdata = () => {
    const [arrWebName, setarrWebName] = useState([]);
    const [arrCyberName, setarrCyberName] = useState([]);
    const [arrWebImg, setarrWebImg] = useState([]);
    const [arrCyberImg, setarrCyberImg] = useState([]);
    const [arrCyberDes, setarrCyberDes] = useState([]);
    const [arrWebDes, setarrWebDes] = useState([]);
    const firstrowname = [{"name" : String(arrWebName[0]), "img" : String(arrWebImg[0]), "des" : String(arrWebDes[0])},{"name" : String(arrWebName[1]), "img" : String(arrWebImg[1]), "des" : String(arrWebDes[1])},{"name" : String(arrWebName[2]), "img" : String(arrWebImg[2]), "des" : String(arrWebDes[2])}];
    const secondrowname = [{"name" : String(arrWebName[3]), "img" : String(arrWebImg[3]), "des" : String(arrWebDes[3])},{"name" : String(arrWebName[4]), "img" : String(arrWebImg[4]), "des" : String(arrWebDes[4])},{"name" : String(arrWebName[5]), "img" : String(arrWebImg[5]), "des" : String(arrWebDes[5])}];
    const thirdrowname = [{"name" : String(arrCyberName[0]), "img" : String(arrCyberImg[0]), "des" : String(arrCyberDes[0])},{"name" : String(arrCyberName[1]), "img" : String(arrCyberImg[1]), "des" : String(arrCyberDes[1])},{"name" : String(arrCyberName[2]), "img" : String(arrCyberImg[2]), "des" : String(arrCyberDes[2])}];
    const forthrowname = [{"name" : String(arrCyberName[3]), "img" : String(arrCyberImg[3]), "des" : String(arrCyberDes[3])}];
    const colarr = [firstrowname,secondrowname,thirdrowname,forthrowname];
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/servdata?name=dataall')
            .then(response => response.json())
            .then(data => {
                setarrWebName(data.WebNames);
                setarrCyberName(data.CyberNames);
                setarrWebImg(data.WebImg);
                setarrCyberImg(data.CyberImg);
                setarrCyberDes(data.CyberDes);
                setarrWebDes(data.WebDes)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        getData();
    }, []);
    return (
        <div id="services" className="flex flex-col w-full h-auto items-center justify-around mt-[50px] mb-[10px]">
            {colarr.map((col,id) => (
                <div key={id} className="h-full w-full flex flex-row justify-evenly items-center max-md:flex-col mb-[30px]">
                    {col.map((obj,ide) => (
                        <div key={ide} className="h-[85%] w-[20%] bg-[#4c5063] text-white flex flex-col justify-evenly items-center rounded-[10px] hover:scale-[1.1] transition-all duration-300 max-md:w-[280px] max-md:mb-[20px] max-[768px]:w-[220px] max-[768px]:py-[10px]" style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <div className='h-[35%] w-full flex flex-row justify-evenly items-center'>
                                <Image
                                    src={"/" + obj.img}
                                    alt=""
                                    className="h-[40px] w-[40px]"
                                    width={100}
                                    height={24}
                                />
                                <p className="text-[22px] font-semibold max-[768px]:text-[13px] max-md:text-[17px]">{obj.name}</p>
                            </div>
                            <div className='h-[65%] w-[90%] text-center'>
                                <p>{obj.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Servicdata;