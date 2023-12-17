'use client'

// import Image from "next/image";
// import Link from "next/link";
import { useState,useEffect } from "react"
{/* <Image
              src="/vercel.svg"
              alt=""
              className=""
              width={100}
              height={24}
              priority
            /> */}

const Loadblog = () => {
    const [img, setImg] = useState([]);
    const [title, setTitle] = useState([]);
    const [des, setDes] = useState([]);
    const [url, setUrl] = useState([]);
    var col = [];
    // var load = document.getElementById("load");
    // let num = document.getElementsByClassName("forcat").length;
    // const getData = () => {
    //     const fet = fetch('/api/blogdata?name=load&num='+String(num))
    //     .then(response => response.json())
    //     .then(data => {
    //         setImg(data.img);
    //         setTitle(data.title);
    //         setDes(data.des);
    //         setUrl(data.url);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // }
    // let blog = document.getElementById("blogsdata");
    // if (col.length > 0) {
    //     for (let e = 0; e < col.length; e++) {
    //         const ele = col[e];
    //         let tex = `
    //         <div className='h-[480px] w-[30%] hover:scale-[1.1] transition-all duration-400 rounded-[30px] bg-white max-md:w-[85%] max-md:h-auto max-md:mb-[30px] forcat mb-[30px]' style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);height: 480px;width: 30%;transition: all ease-in-out;border-radius: 30px;background-color: white;margin-bottom: 30px;">
    //             <div className='h-[250px] w-full flex justify-center items-center max-md:h-[150px]'>
    //                 <Image src=${"/" + ele.img} alt="" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
    //             </div>
    //             <div className='w-full flex flex-col max-md:h-[250px] max-md:justify-evenly'>
    //                 <div className='h-[40px] w-full flex justify-center items-center max-md:h-auto'>
    //                     <Link className='font-black text-[#4831d4] text-[18px] hover:text-[#CBF380] max-[1024px]:text-[15px] max-md:text-[18px] forsearch' href=${"/" + ele.url}>${ele.title}</Link>
    //                 </div>
    //                 <div className='h-[100px] w-full max-md:h-auto max-[1024px]:overflow-auto'>
    //                     <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>${ele.des}</p>
    //                 </div>
    //                 <div className='h-[80px] w-full flex justify-center items-center max-md:h-auto'>
    //                     <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href=${"/" + ele.url}>Read More</Link>
    //                 </div>
    //             </div>
    //         </div>
    //         `
    //         blog.innerHTML += tex;
    //     }
    // } else {
    //     load.innerHTML = text;
    //     load.style.pointerEvents = "none";
    // }
    // useEffect(()=>{
    //     getData();
        // for (let r = 0; r < title.length; r++) {
        //     const ob = {"img" : "", "title" : "", "des" : "", "url" : ""};
        //     col.push(ob);
        // }
        // for (let i = 0; i < title.length; i++) {
        //     const im = img[i];
        //     const ti = title[i];
        //     const de = des[i];
        //     const ur = url[i];
        //     col[i].img = String(im);
        //     col[i].title = String(ti);
        //     col[i].des = String(de);
        //     col[i].url = String(ur);
        // }
    // });
    useEffect(()=>{
        var load = document.getElementById("load");
        load.addEventListener("click", function () {
            let num = document.getElementsByClassName("forcat").length;
            // console.log(num);
            let blog = document.getElementById("blogsdata");
            const getData = async () => {
                const fet = await fetch('/api/blogdata?name=load&num='+String(num))
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
            load.innerHTML = "<Image src='/loading.svg' alt='loading Logo' width={50} height={50} />";
            load.style.pointerEvents = "none";
            setTimeout(() => {
                // console.log(col);
                load.innerHTML = "No More Posts";
                load.style.pointerEvents = "none";
                // if (col.length == 0) {
                //     load.innerHTML = text;
                //     load.style.pointerEvents = "none";
                // } else {
                //     load.innerHTML = "Look at More";
                //     load.style.pointerEvents = "auto";
                //     for (let e = 0; e < col.length; e++) {
                //         const ele = col[e];
                //         let tex = `
                //         <div className='h-[480px] w-[30%] hover:scale-[1.1] transition-all duration-400 rounded-[30px] bg-white max-md:w-[85%] max-md:h-auto max-md:mb-[30px] forcat mb-[30px]' style={{"boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                //             <div className='h-[250px] w-full flex justify-center items-center max-md:h-[150px]'>
                //                 <Image src=${"/" + ele.img} alt="" className='w-[97%] h-[97%] object-cover rounded-[30px]' width={200} height={200}/>
                //             </div>
                //             <div className='w-full flex flex-col max-md:h-[250px] max-md:justify-evenly'>
                //                 <div className='h-[40px] w-full flex justify-center items-center max-md:h-auto'>
                //                     <Link className='font-black text-[#4831d4] text-[18px] hover:text-[#CBF380] max-[1024px]:text-[15px] max-md:text-[18px] forsearch' href=${"/" + ele.url}>${ele.title}</Link>
                //                 </div>
                //                 <div className='h-[100px] w-full max-md:h-auto max-[1024px]:overflow-auto'>
                //                     <p className='h-full w-full text-[#4831d4] text-[15px] text-center'>${ele.des}</p>
                //                 </div>
                //                 <div className='h-[80px] w-full flex justify-center items-center max-md:h-auto'>
                //                     <Link className='h-[50px] w-[160px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-[#4831d4] border border-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono' href=${"/" + ele.url}>Read More</Link>
                //                 </div>
                //             </div>
                //         </div>
                //         `
                //         blog.innerHTML += tex;
                //     }
                // }
            }, 4000);
        });
    });
    console.log(img);
    console.log(title);
    console.log(des);
    console.log(url);
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
    console.log(col);
    
    return (
        <div className="h-[80px] w-full flex justify-center items-center my-[20px]">
            <div id="load" className="h-[50px] w-[250px] border flex justify-center items-center bg-[#4831d4] rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono hover:cursor-pointer">Look at More</div>
        </div>
    )
}

export default Loadblog;