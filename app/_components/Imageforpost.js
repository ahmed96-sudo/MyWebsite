'use client'

import Image from "next/image";
import { useEffect,useState } from "react"

const Imageforpost = ({ title }) => {
    const [img, setImg] = useState([]);
    const [title1, setTitle1] = useState([]);
    var col = [];
    for (let r = 0; r < title1.length; r++) {
        const ob = {"img" : "", "title1" : ""};
        col.push(ob);
    }
    for (let i = 0; i < title1.length; i++) {
        const im = img[i];
        const ti = title1[i];
        col[i].img = String(im);
        col[i].title1 = String(ti);
    }
    useEffect(()=>{
        const getData = async () => {
            const fet = await fetch('/api/blogdata?name=data_blog')
            .then(response => response.json())
            .then(data => {
                setImg(data.img);
                setTitle1(data.title);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        getData();
    }, []);
    col.forEach(ele => {
        if (ele.title1 == title) {
            document.getElementById('imgforpost').setAttribute("src", "/"+String(ele.img));
        }
    });
    return (
            <Image
                id="imgforpost"
                src=""
                alt="Vercel Logo"
                className="h-[450px] w-[600px] my-[20px] mx-auto rounded-[20px] max-md:w-[80%] max-md:h-[300px]"
                width={100}
                height={24}
            />
        )
}

export default Imageforpost;

// useEffect(() => {
        
    //     switch (title) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    //     if (title == "Web Development Trends") {
    //         document.getElementById('imgforpost').setAttribute("src", "/Web-Development-Trends.jpg");
    //     } else if (title == "Coding Best Practices") {
    //         document.getElementById('imgforpost').setAttribute("src", "/pexels-pixabay-270404.jpg");
    //     } else if (title == "UX Design Tips") {
    //         document.getElementById('imgforpost').setAttribute("src", "/Ui-ux-cover-imge.webp");
    //     } else if (title == "Cybersecurity Essentials") {
    //         document.getElementById('imgforpost').setAttribute("src", "/cyber.jpg");
    //     } else if (title == "2024 Cyber Threats") {
    //         document.getElementById('imgforpost').setAttribute("src", "/Top-Cybersecurity-Threats-in-2023.jpg");
    //     } else if (title == "Online Safety Tips") {
    //         document.getElementById('imgforpost').setAttribute("src", "/safety.jpg");
    //     }
    // }, [])