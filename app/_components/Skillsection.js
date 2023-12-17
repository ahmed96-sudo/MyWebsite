import "../globals.css"

const Skillsection = () => {
    return (
        <section className="h-[400px] containe max-md:h-[500px]">
            <div className="h-[105px] w-full flex flex-col justify-center items-center mt-[20px] text-[#4831d4]">
                <h1 className="text-[55px] font-[800] font-[monospace]">Skills</h1>
                <h3>Here are some Skills I Have.</h3>
            </div>
            <div className="flex flex-row h-[275px] justify-around max-md:h-[370px] max-md:items-center max-md:flex-col">
                <div className="h-full w-[300px] flex flex-col justify-evenly">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">HTML/CSS</span>
                            <span className="text-sm font-medium text-[#4831d4]">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">JavaScript</span>
                            <span className="text-sm font-medium text-[#4831d4]">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Front-End Frameworks (e.g. React)</span>
                            <span className="text-sm font-medium text-[#4831d4]">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "80%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Back-End Development</span>
                            <span className="text-sm font-medium text-[#4831d4]">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-[300px] flex flex-col justify-evenly">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Database Management</span>
                            <span className="text-sm font-medium text-[#4831d4]">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Server Configuration</span>
                            <span className="text-sm font-medium text-[#4831d4]">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Version Control (e.g. Git)</span>
                            <span className="text-sm font-medium text-[#4831d4]">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4831d4]">Problem Solving</span>
                            <span className="text-sm font-medium text-[#4831d4]">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#CBF380] h-2.5 rounded-full" style={{width: "95%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skillsection;