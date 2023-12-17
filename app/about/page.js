import "./about.css"
import Image from "next/image";
import Link from "next/link";
export const metadata = {
    title: 'About Me',
    description: 'About Ahmed Page.',
}
const Aboutpage = () => {
    return (
        <section className="flex flex-col items-center w-[80%] mx-auto my-[50px] h-auto max-md:w-[90%]">
            <h1 className="text-[50px] text-[#4831d4] font-[600] font-mono max-md:text-[30px]">About Ahmed Saeed</h1>
            <div className="flex items-center justify-between max-md:flex-col">
                <Image
                    src="/ahmed.jpg"
                    alt="Ahmed Saeed"
                    className="w-[150px] h-[150px] rounded-[50%] object-cover max-md:my-[20px]"
                    width={100}
                    height={24}
                    priority
                />
                <p className="w-[80%] h-auto text-[18px] text-[#3d155f] max-md:w-full max-md:text-center max-[768px]:ml-[20px]">Hello, I'm <span className="font-[700] text-[20px] text-[#4831d4]">Ahmed Saeed</span>, a passionate Full Stack Web Developer and a devoted Cyber Security Professional. Welcome to my corner of the web. I'm excited to share my adventure, capabilities, and experiences with you.</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-[30px] text-[#4831d4] font-[600] font-mono">My Story</h2>
                <div className="flex flex-col items-center my-[20px] bg-[#003557] rounded-[30px] px-0 py-[10px]">
                    <div className="w-[250px] flex flex-col text-center text-white font-[500] font-mono text-[26px] max-md:w-auto">
                        <h2>The Web Developer</h2>
                        <hr className="border-t-[3px]"/>
                    </div>
                    <div className="flex items-center justify-evenly my-[10px] max-md:flex-col max-md:h-[500px]">
                        <Image
                            src="/Web Development.jpg"
                            alt="web Development"
                            className="w-[40%] h-[300px] rounded-[30px] max-md:w-[80%] max-md:mb-[15px]"
                            width={100}
                            height={24}
                            priority
                        />
                        <div className="w-[50%] text-[15px] text-white max-md:overflow-auto max-md:text-center max-md:w-[80%]"><p>From the very beginning of my coding journey, I determined myself irresistibly attracted to the countless horizons of the Web. My journey as a Web developer started with a single, unshakable vision to no longer merely create functional websites, but to craft digital experiences that seamlessly blend aesthetics with functionality. This quest for excellence led me through a labyrinth of technologies and techniques, sharpening my Skills in both front-end and back-end development.</p><p className="py-[10px]"><span className="text-[#CBF380]">-&gt;</span>As a front-end artisan, I've mastered the art of transforming static designs into captivating user interfaces. Using the latest HTML, CSS, and JavaScript innovations, I breathe life into websites, ensuring they are responsive, intuitive, and visually striking.</p><p><span className="text-[#CBF380]">-&gt;</span>On the back-end, I engineer the backbone of web applications with technologies like Node.js and Python. My proficiency in database management allows me to design and optimize data storage solutions that guarantee seamless data access and retrieval.</p></div>
                    </div>
                </div>
                <div className="flex flex-col items-center my-[20px] bg-[#003557] rounded-[30px] px-0 py-[10px]">
                    <div className="w-[450px] flex flex-col text-center text-white font-[500] font-mono text-[26px] max-md:w-[90%]">
                        <h2>The Cyber Security Professional</h2>
                        <hr className="border-t-[3px]"/>
                    </div>
                    <div className="flex items-center justify-evenly my-[10px] max-md:flex-col-reverse max-md:h-[500px]">
                        <div className="w-[50%] text-[15px] text-white max-md:overflow-auto max-md:text-center max-md:w-[80%]"><p>In an era where every byte of data is invaluable, my journey into the realm of Cyber Security began with a realization - safeguarding the digital world is paramount. My relentless pursuit of knowledge led me to become proficient in a diverse array of security practices and technologies. I firmly believe that a strong foundation in web development, when intertwined with a deep understanding of cybersecurity, is indispensable in today's interconnected world.</p><p className="py-[10px]"><span className="text-[#CBF380]">-&gt;</span>My expertise covers many aspects of cybersecurity. I specialize in conducting comprehensive vulnerability assessments, carefully identifying and mitigating vulnerabilities in web applications. Penetration testing is another of my strengths, allowing me to thoroughly analyze systems, identify potential security vulnerabilities and strengthen digital security</p><p><span className="text-[#CBF380]">-&gt;</span>I am an advocate of strong security best practices, and advise the adoption of industry-leading security measures to protect sensitive data and user privacy. Additionally, I exert my efforts in incident response, ensuring that when safety incidents occur, they are responded to quickly and effectively, minimizing any potential impact and facilitating rapid recovery.</p></div>
                        <Image
                            src="/cyberSecurity.jpg"
                            alt="Cyber Security"
                            className="w-[40%] h-[300px] rounded-[30px] max-md:w-[80%] max-md:mb-[15px]"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <h2 className="text-[30px] text-[#4831d4] font-[600] font-mono">My Expertise</h2>
                <div className="flex flex-row w-full justify-around mt-[25px] max-md:flex-col max-md:items-center">
                    <div className="flip-card-abt max-md:mb-[20px]">
                        <div className="flip-card-abt-inner">
                            <div className="flip-card-abt-front relative">
                                <Image
                                    src="/card web.webp"
                                    alt="web card"
                                    className="h-full w-full flex justify-center items-center rounded-[30px]"
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute top-[60%] text-white px-[10px] max-[768px]:top-[35%] max-[1024px]:top-[40%]">
                                    <h2 className="text-[30px]">Full Stack Web Development</h2>
                                    <p className="text-[17px]">I possess a deep expertise in both front-end and back-end development, ensuring end-to-end web application development.</p>
                                </div>
                            </div>
                            <div className="flip-card-abt-back flex justify-evenly items-center flex-row max-md:flex-col">
                                <div className="flex flex-col items-center max-md:h-1/2 max-md:justify-evenly">
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mb-[30px] ml-[22px] max-md:w-[90%] max-md:mb-0 max-md:ml-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Front-end Development</h3>
                                        <p className="w-auto overflow-auto">Crafting responsive and user-centric interfaces using the latest HTML, CSS, and JavaScript technologies.</p>
                                    </div>
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 ml-[22px] max-md:w-[90%] max-md:ml-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Back-end Development</h3>
                                        <p className="w-auto overflow-auto">Building robust server-side applications with the power of Node.js and Python.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-md:h-1/2 max-md:justify-evenly">
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mb-[30px] mx-[22px] max-md:w-[90%] max-md:mb-0 max-md:mx-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Database Management</h3>
                                        <p className="w-auto overflow-auto">Designing and optimizing databases for efficient data storage and retrieval.</p>
                                    </div>
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mx-[22px] max-md:w-[90%] max-md:mx-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Web Security</h3>
                                        <p className="w-auto overflow-auto">Implementing stringent security measures to safeguard websites and applications against ever-evolving cyber threats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-abt">
                        <div className="flip-card-abt-inner">
                            <div className="flip-card-abt-front relative">
                                <Image
                                    src="/card cyber.jfif"
                                    alt="cyber card"
                                    className="h-full w-full flex justify-center items-center rounded-[30px]"
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute top-[60%] text-white px-[10px] max-[768px]:top-[55%]">
                                    <h2 className="text-[30px]">Cyber Security</h2>
                                    <p className="text-[17px]">I excel in ensuring the security of digital assets, offering a range of cybersecurity services.</p>
                                </div>
                            </div>
                            <div className="flip-card-abt-back flex justify-evenly items-center flex-row max-md:flex-col">
                                <div className="flex flex-col items-center max-md:h-1/2 max-md:justify-evenly">
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mb-[30px] ml-[22px] max-md:w-[90%] max-md:mb-0 max-md:ml-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[17px] text-[#CBF380] font-[700] max-md:text-[16px] max-[1024px]:text-[17px]">Vulnerability Assessment</h3>
                                        <p className="w-auto overflow-auto">Identifying and mitigating vulnerabilities within web applications.</p>
                                    </div>
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 ml-[22px] max-md:w-[90%] max-md:ml-0 max-md:h-[90px] max-[1024px]:ml-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Penetration Testing</h3>
                                        <p className="w-auto overflow-auto">Evaluating systems to uncover potential security weaknesses and fortify defenses.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-md:h-1/2 max-md:justify-evenly">
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mb-[30px] mx-[22px] max-md:w-[90%] max-md:mb-0 max-md:mx-0 max-md:h-[90px] max-[1024px]:mx-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[17px] max-[1024px]:text-[17px]">Security Best Practices</h3>
                                        <p className="w-auto overflow-auto">Advising on the adoption of industry-leading security practices to protect sensitive data and user privacy.</p>
                                    </div>
                                    <div className="flex flex-col items-center w-auto text-center h-[130px] justify-evenly bg-[#4c5063] rounded-[30px] text-white hover:scale-[1.1] transition-all duration-300 mx-[22px] max-md:w-[90%] max-md:mx-0 max-md:h-[90px] max-[1024px]:mx-0 max-[1024px]:w-[90%]">
                                        <h3 className="font-mono text-[20px] text-[#CBF380] font-[700] max-md:text-[18px] max-[1024px]:text-[17px]">Incident Response</h3>
                                        <p className="w-auto overflow-auto">Swiftly and effectively managing security incidents to ensure minimal impact and rapid recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-[200px] justify-evenly max-[768px]:h-auto max-[768px]:mt-[20px]">
                <h2 className="text-[30px] text-[#4831d4] font-[600] font-mono">My Mission</h2>
                <p className="text-[20px] text-center text-[#3d155f]">My Mission is to bridge the gap between exceptional web development and solid cybersecurity. I am deeply committed to building web solutions that not only exhibit beauty and functionality but also prioritize safety and security of user data. In a world where the digital landscape is constantly evolving, I strive to stay ahead of the curve and help others do the same.</p>
            </div>
            <div className="flex flex-col items-center w-full h-[200px] justify-evenly max-[768px]:h-auto">
                <h2 className="text-[30px] text-[#4831d4] font-[600] font-mono">Let's Connect</h2>
                <p className="text-[20px] text-center text-[#3d155f]">I always enjoy collaborating on exciting projects, sharing knowledge and connecting with the vibrant tech community. Don’t hesitate to contact me via <Link className="text-[#c71610] text-[30px] font-[600] hover:text-[#3d155f]" target="_blank" href={"mailto:ahmed.saeed.12855@gmail.com"}>Email</Link> or <Link className="text-[#0077b5] text-[30px] font-[600] hover:text-[#3d155f]" target="_blank" href={"https://www.linkedin.com/in/ahmed-saeed-58335a181/"}>LinkedIn</Link>. Let’s start a conversation together and explore the endless possibilities of the digital universe.</p>
                <p className="text-[20px] text-center text-[#3d155f]">Thank you for visiting my website, and I look forward to connecting with you!</p>
            </div>
        </section>
    )
}
export default Aboutpage;