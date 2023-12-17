'use client'

import "../portfol.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react"

const Portdata = () => {
    const [name, setName] = useState([]);
    const [img, setImg] = useState([]);
    const [development, setDevelopment] = useState([]);
    const [url, setUrl] = useState([]);
    const [des, setDes] = useState([]);
    const [finalcol, setFinalcol] = useState([]);
    var col = [];
    var load_col = [];
    for (let r = 0; r < name.length; r++) {
        const ob = {"name" : "", "img" : "", "development" : true, "url" : "", "des" : ""};
        const nam = name[r];
        const im = img[r];
        const develop = development[r];
        const ur = url[r];
        const de = des[r];
        ob.name = String(nam);
        ob.img = String(im);
        ob.development = develop;
        ob.url = String(ur);
        ob.des = String(de);
        col.push(ob);
    }
    const handlingloadportbtn = async () => {
        var load = document.getElementById("load1");
        var num = document.getElementsByClassName("forport").length;
        load.innerHTML = "<Image src='/loading.svg' alt='loading Logo' width={50} height={50} />";
        load.style.pointerEvents = "none";
        const fet = await fetch('/api/portdata?name=load&num='+String(num))
        .then(response => response.json())
        .then(data => {
            if (data.name.length == 0) {
                load.innerHTML = "Can't Load More";
                load.style.pointerEvents = "none";
            } else {
                for (let t = 0; t < data.name.length; t++) {
                    var obe = {"name" : "", "img" : "", "development" : true, "url" : "", "des" : ""};
                    const nm = data.name[t];
                    const ig = data.img[t];
                    const develope = data.development[t];
                    const ul = data.url[t];
                    const ds = data.des[t];
                    obe.name = String(nm);
                    obe.img = String(ig);
                    obe.development = develope;
                    obe.url = String(ul);
                    obe.des = String(ds);
                    load_col.push(obe);
                }
                var arr_for_load = [...finalcol];
                for (let a = 0; a < load_col.length; a++) {
                    const objk = load_col[a];
                    arr_for_load.push(objk);
                }
                setFinalcol(arr_for_load);
                load.innerHTML = "Look at More";
                load.style.pointerEvents = "auto";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/portdata?name=data_port')
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
        <div>
            <div className="flex justify-between max-md:flex-col max-md:items-center max-md:h-full max-md:mb-[10px] flex-wrap mt-[50px]">
                {
                    col.map((obje,ide) => {
                        var dev = "";
                        if (obje.development == true) {
                            dev = <div className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer">In Development</div>;
                        } else {
                            dev = <Link target="_blank" className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono" href={String(obje.url)}>Visit Website</Link>;
                        }
                        return (
                        <div key={ide} className="flip-card m-[10px] forport">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image
                                        src={"/" + obje.img}
                                        alt="Portfolio"
                                        className="h-full w-full flex justify-center items-center rounded-[30px]"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flip-card-back flex justify-center items-center flex-col">
                                    <h1 className="text-center text-[18px] font-semibold mb-[22px]">{String(obje.des)}</h1>
                                    {dev}
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    finalcol.map((obje,ide) => {
                        var dev = "";
                        if (obje.development == true) {
                            dev = <div className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono cursor-pointer">In Development</div>;
                        } else {
                            dev = <Link target="_blank" className="h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono" href={String(obje.url)}>Visit Website</Link>;
                        }
                        return (
                        <div key={ide} className="flip-card m-[10px] forport">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image
                                        src={"/" + obje.img}
                                        alt="Portfolio"
                                        className="h-full w-full flex justify-center items-center rounded-[30px]"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flip-card-back flex justify-center items-center flex-col">
                                    <h1 className="text-center text-[18px] font-semibold mb-[22px]">{String(obje.des)}</h1>
                                    {dev}
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className="h-[80px] w-full flex justify-center items-center my-[20px]">
                <div id="load1" onClick={handlingloadportbtn} className="h-[50px] w-[250px] border flex justify-center items-center bg-[#4831d4] rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono hover:cursor-pointer">Look at More</div>
            </div>
        </div>
    );
}

export default Portdata;