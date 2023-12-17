import Image from 'next/image';
import Link from 'next/link';
import Contactpag from "../_components/Contactpag";

export const metadata = {
    title: 'Contact Me',
    description: 'Ahmed Contact Page.',
}
const Contactpage = () => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center'>
                <div className='my-[40px]'>
                    <h1 className='text-[55px] font-[600] text-[#4831d4] text-center max-md:text-[20px]'>Thanks for taking the time to reach out.<br/>How can I help you today?</h1>
                </div>
                <Contactpag/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='my-[40px]'>
                    <h1 className='text-[55px] font-[600] text-[#4831d4] text-center max-md:text-[30px]'>GET IN TOUCH</h1>
                </div>
                <div className='flex flex-col w-full items-center h-[400px] justify-evenly max-md:h-auto'>
                    <div className='flex flex-row w-[60%] justify-around max-md:flex-col max-md:items-center max-md:w-full max-[768px]:w-[70%]'>
                        <div className='w-[30%] flex flex-col items-center h-[130px] justify-evenly text-[#3d155f] max-md:w-full'>
                            <div className=''>
                                <Image
                                    src="/gmail.png"
                                    alt="gmail Logo"
                                    className="h-[50px] w-[50px]"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div><h1 className='font-[600] text-[20px]'>EMAIL</h1></div>
                            <div><Link href={"mailto:ahmed.saeed.12855@gmail.com"} className='hover:text-[#F44537]'>ahmed.saeed.12855@gmail.com</Link></div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center h-[130px] justify-evenly text-[#3d155f] max-md:w-full'>
                            <div className=''>
                                <Image
                                    src="/telephone-call.png"
                                    alt="telephone Logo"
                                    className="h-[50px] w-[50px]"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div><h1 className='font-[600] text-[20px]'>CALL</h1></div>
                            <div><Link href={"tel:+201144158673"} className='hover:text-[#4831d4]'>+201144158673</Link></div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center h-[130px] justify-evenly text-[#3d155f] max-md:w-full'>
                            <div className=''>
                                <Image
                                    src="/linkedin.png"
                                    alt="linkedin Logo"
                                    className="h-[50px] w-[50px]"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div><h1 className='font-[600] text-[20px]'>CHAT</h1></div>
                            <div><Link href={"https://www.linkedin.com/in/ahmed-saeed-58335a181/"} target='_blank' className='hover:text-[#0177B6]'>Ahmed Saeed</Link></div>
                        </div>
                    </div>
                    <div className='flex flex-row w-1/2 justify-center items-center h-[200px] max-md:h-auto max-md:w-full max-md:mb-[20px]'>
                        <Image
                            src="/email.png"
                            alt="email Logo"
                            className="mr-[70px] h-[130px] w-[130px] max-md:mx-[10px] max-md:w-[90px] max-md:h-[90px]"
                            width={130}
                            height={130}
                        />
                        <div className='flex flex-col'>
                            <h3 className='font-[600] text-[#4831d4]'>ADDITIONAL CONTACTS:</h3>
                            <p className='text-[15px] text-[#3d155f]'>
                                <Link href={"https://github.com/ahmed96-sudo"} className='hover:text-[#1F2328]'>Github: ahmed96-sudo</Link><br/>
                                <Link href={"https://www.facebook.com/Ahmed.Saeed8089"} className='hover:text-[#6C54FE]'>Facebook Messenger: Ahmed Saeed</Link><br/>
                                <Link href={"https://twitter.com/Ahmed_Saeed960"} className='hover:text-[#1A8CD8]'>Twitter(X): DeadlySox</Link><br/>
                                <Link href={"https://discord.com"} className='hover:text-[#313338]'>Discord: DeadlySox</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contactpage;