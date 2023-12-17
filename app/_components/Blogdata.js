'use client'

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

const Blogdata = () => {
    const [img, setImg] = useState([]);
    const [title, setTitle] = useState([]);
    const [des, setDes] = useState([]);
    const [url, setUrl] = useState([]);
    const [finalcol, setFinalcol] = useState([]);
    var col = [];
    var load_col = [];
    for (let r = 0; r < title.length; r++) {
        const ob = {"img" : "", "title" : "", "des" : "", "url" : ""};
        const im = img[r];
        const ti = title[r];
        const de = des[r];
        const ur = url[r];
        ob.img = String(im);
        ob.title = String(ti);
        ob.des = String(de);
        ob.url = String(ur);
        col.push(ob);
    }
    const handlingloadbtn = async () => {
        var load = document.getElementById("load");
        var num = document.getElementsByClassName("forcat").length;
        load.innerHTML = "<Image src='/loading.svg' alt='loading Logo' width={50} height={50} />";
        load.style.pointerEvents = "none";
        const fet = await fetch('/api/blogdata?name=load&num='+String(num))
        .then(response => response.json())
        .then(data => {
            if (data.title.length == 0) {
                load.innerHTML = "No More Posts";
                load.style.pointerEvents = "none";
            } else {
                for (let t = 0; t < data.title.length; t++) {
                    var obe = {"img" : "", "title" : "", "des" : "", "url" : ""};
                    const ig = data.img[t];
                    const tit = data.title[t];
                    const ds = data.des[t];
                    const ul = data.url[t];
                    obe.img = ig;
                    obe.title = tit;
                    obe.des = ds;
                    obe.url = ul;
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
            const fet = await fetch('/api/blogdata?name=data_blog')
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
        <div>
            <div className="flex justify-between max-md:flex-col max-md:items-center max-md:h-full mb-[40px] flex-wrap">
                {
                    col.map((obj,id) => (
                    <div key={id} className='h-[480px] w-[30%] hover:scale-[1.1] transition-all duration-400 rounded-[30px] bg-white max-md:w-[85%] max-md:h-auto max-md:mb-[30px] forcat mb-[30px]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                        <div className='h-[250px] w-full flex justify-center items-center max-md:h-[150px]'>
                            <Image src={"/" + obj.img} alt="" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                        </div>
                        <div className='w-full flex flex-col max-md:h-[250px] max-md:justify-evenly'>
                            <div className='h-[40px] w-full flex justify-center items-center max-md:h-auto'>
                                <Link className='font-black text-[#4831d4] text-[18px] hover:text-[#CBF380] max-[1024px]:text-[15px] max-md:text-[18px] forsearch' href={"/" + obj.url}>{obj.title}</Link>
                            </div>
                            <div className='h-[100px] w-full max-md:h-auto max-[1024px]:overflow-auto'>
                                <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>{obj.des}</p>
                            </div>
                            <div className='h-[80px] w-full flex justify-center items-center max-md:h-auto'>
                                <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href={"/" + obj.url}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
                {
                    finalcol.map((obj,id) => (
                        <div key={id} className='h-[480px] w-[30%] hover:scale-[1.1] transition-all duration-400 rounded-[30px] bg-white max-md:w-[85%] max-md:h-auto max-md:mb-[30px] forcat mb-[30px]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <div className='h-[250px] w-full flex justify-center items-center max-md:h-[150px]'>
                                <Image src={"/" + obj.img} alt="" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                            </div>
                            <div className='w-full flex flex-col max-md:h-[250px] max-md:justify-evenly'>
                                <div className='h-[40px] w-full flex justify-center items-center max-md:h-auto'>
                                    <Link className='font-black text-[#4831d4] text-[18px] hover:text-[#CBF380] max-[1024px]:text-[15px] max-md:text-[18px] forsearch' href={"/" + obj.url}>{obj.title}</Link>
                                </div>
                                <div className='h-[100px] w-full max-md:h-auto max-[1024px]:overflow-auto'>
                                    <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>{obj.des}</p>
                                </div>
                                <div className='h-[80px] w-full flex justify-center items-center max-md:h-auto'>
                                    <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href={"/" + obj.url}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="h-[80px] w-full flex justify-center items-center my-[20px]">
                <div id="load" onClick={handlingloadbtn} className="h-[50px] w-[250px] border flex justify-center items-center bg-[#4831d4] rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono hover:cursor-pointer">Look at More</div>
            </div>
        </div>
    );
}

export default Blogdata;
