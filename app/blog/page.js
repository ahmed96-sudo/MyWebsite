import "./glob.css"
import Sidebar from "../_components/Sidebar";
import Blogdata from "../_components/Blogdata";

export const metadata = {
    title: 'Blog',
    description: 'Ahmed Blog',
}
const Blogpage = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="w-full flex flex-row max-[768px]:h-auto max-[768px]:flex-col">
                <Sidebar />
                <div className="blog w-[75%] h-full max-[768px]:w-auto">
                    <div id="ham" className="ham hidden max-[768px]:block" htmlFor="side-menu"><span id="hamline" className="ham-line"></span></div>
                    <h1 className="text-center text-[55px] font-[800] font-[monospace] text-[#4831d4] my-[40px]" id="top">Blog</h1>
                    <Blogdata />
                </div>
            </div>
        </section>
    )
}
export default Blogpage;