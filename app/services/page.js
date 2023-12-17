import Link from 'next/link';
import "../portfol.css";
import Servicdata from "../_components/Servicdata";
export const metadata = {
    title: 'Services',
    description: 'Ahmed Services Page.',
}
const Servicespage = () => {
    return (
        <section>
            <div className="flex h-[550px] justify-center items-center bg-[url('/serv.png')] bg-no-repeat bg-cover flex-col">
                <h1 className="text-[60px] text-[#4831d4] font-[500]">Services</h1>
                <p className="text-[30px] text-white text-center">Unlocking Digital Potential</p>
                <Link className='h-[50px] w-[250px] flex justify-center items-center bg-[#4831d4] rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-transparent transition-all duration-300 font-mono my-[20px] hover:border-[#4831d4] hover:border' href={"#services"}>Explore Services</Link>
            </div>
            <Servicdata />
            <div className="h-[80px] w-full flex justify-center items-center my-[20px]">
                <Link href={"/contact"} className="h-[50px] w-[250px] border flex justify-center items-center bg-[#4831d4] rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono hover:cursor-pointer">Let's Talk</Link>
            </div>
        </section>
    )
}
export default Servicespage;