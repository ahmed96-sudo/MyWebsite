// import "../globals.css"
import Image from "next/image";
import Link from "next/link";
{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}

const Hero = () => {
    return (
        <section className="bg-[#4831D4] pb-[40px]">
            <div className="flex flex-row h-[350px] m-auto w-[70%] max-md:flex-col-reverse max-md:h-[600px] max-sm:w-full max-md:items-center max-[768px]:w-[90%]">
                <div className="h-full w-[70%] flex flex-col justify-center max-md:h-[60%] max-md:w-full max-md:items-center">
                    <div className="text-white text-[40px] h-[180px] w-[500px] font-semibold max-md:w-auto max-md:h-auto max-md:text-[24px] max-md:text-center">
                        <p>Hey, I&apos;M Ahmed, A<br />Creative <span className="text-[#CBF380] font-bold">Full-Stack</span> Web Designer & Developer.</p>
                    </div>
                    <div className="h-[60px] flex max-md:h-[100px] max-md:w-auto">
                        <ul className="h-full w-full flex flex-row items-center text-[#CBF380] text-[20px] max-md:text-[19px] max-md:w-full max-md:justify-center">
                            <li className="mr-[20px]">Front-end</li>
                            <li className="mr-[20px]">Back-end</li>
                            <li>Developer</li>
                        </ul>
                    </div>
                    <div className="flex flex-row h-[60px] max-md:flex-col max-md:h-[150px] max-md:items-center">
                        <div className="h-full w-[250px] flex justify-center mr-[20px] max-md:mr-0">
                            <Link className="h-[50px] w-[250px] border flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold text-white hover:text-[#4831d4] hover:bg-white transition-all duration-300 font-mono" href="/portfolio">Look at the Portfolio</Link>
                        </div>
                        <div className="h-full flex justify-start">
                            <Link className="h-[50px] w-[150px] flex justify-center items-center bg-[#CBF380] rounded-[30px] text-[17px] font-semibold text-black hover:bg-white hover:text-[#4831d4] transition-all duration-300 font-mono" href="/contact">Let&apos;s Talk</Link>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] flex justify-center items-center max-md:w-full">
                    <Image
                        src="/ahmed.jpg"
                        alt="Vercel Logo"
                        className="h-[250px] w-[250px] rounded-[50%] object-cover max-md:h-[200px] max-md:w-[200px] max-md:mb-[20px]"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
export default Hero;