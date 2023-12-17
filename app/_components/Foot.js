import "../globals.css"
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
//  max-sm:flex-col max-sm:items-center
const Foot = () => {
    return (
        <footer className="bg-[#3d155f] h-[300px]">
            <div className="containe flex flex-col">
                <div className="flex flex-row justify-between h-[200px] items-center max-sm:flex-col">
                    <div className="flex flex-col">
                        <h1 className="text-white text-[25px] font-bold font-sans max-sm:text-center">AHMED SAEED</h1>
                        <p className="text-[#cbc9e2] text-[14px] w-[450px] max-sm:w-auto max-sm:text-center">A Creative Full-Stack Web Designer & Developer building Web Applications that leads to the Success of the overall product.</p>
                    </div>
                    <div className="flex flex-col max-sm:items-center max-sm:mb-[10px]">
                        <h4 className="text-white text-[25px] font-bold font-sans">SOCIAL</h4>
                        <div className="flex flex-row w-[200px] justify-between">
                            <Link target="_blank" href={"https://www.linkedin.com/in/ahmed-saeed-58335a181/"}>
                                <Image
                                    src="/linkedin.svg"
                                    alt="Linkedin Logo"
                                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </Link>
                            <Link target="_blank" href={"https://github.com/ahmed96-sudo"}>
                                <Image
                                    src="/github.svg"
                                    alt="Github Logo"
                                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </Link>
                            <Link href={"mailto:ahmed.saeed.12855@gmail.com"}>
                                <Image
                                    src="/at.svg"
                                    alt="email"
                                    className="h-[40px] w-[40px] rounded-[50%] bg-white"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="text-center my-[20px] text-[#cbc9e2] text-[14px]">
                    COPYRIGHT &copy; 2023 AHMEDSAEED. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    )
}
export default Foot;