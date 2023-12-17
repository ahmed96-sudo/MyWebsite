import "../portfol.css";
import Portdata from "../_components/Portdata";
export const metadata = {
    title: 'Portfolio',
    description: 'Ahmed Portfolio Page.',
}
const Portfolio = () => {
    return (
        <section>
            <div className="flex h-[550px] justify-center items-center bg-[url('/portf.png')] bg-no-repeat bg-cover flex-col">
                <h1 className="text-[60px] text-[#4831d4] font-black">My Work</h1>
                <p className="text-[30px] text-white text-center">Here are a few past projects I've worked on</p>
            </div>
            <Portdata />
        </section>
    )
}

export default Portfolio;