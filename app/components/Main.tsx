'use client'
import Link from "next/link";
import EnterAnimation from "./EnterAnimation";
import TextAnimation from "./TextAnimation";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { desc } from "framer-motion/client";
import TransitionOptions from "./TransitionAnimation";

interface refArrayTypes {
    ref_name: React.RefObject<HTMLElement | null>;
    name: string;
    is_active: boolean;
    id?: string;
}

const ExperienceArray = [
    {
        company: 'Constient Global Solutions',
        position: 'Junior Software Engineer',
        duration: 'May 2022 - Present',
        description: 'Developed & optimized React.js applications, increasing user engagement by 15%. Led UI performance enhancements, reducing load time by 25% and improving accessibility. Troubleshot and resolved high-priority production issues, improving system efficiency by 30% under strict deadlines, Designed & implemented Redux state management, ensuring scalable & responsive applications. Integrated & secured APIs, working with backend teams for seamless data flow. Reviewed code & mentored junior developers, ensuring best coding practices and clean architecture.',
        skills: ['React.js', 'JavaScript (ES6+)', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI', 'Bootstrap', 'Reactstrap', 'Redux', 'Git']
    }
]

const EducationArray = [
    {
        institution: 'Kongu Engineering College',
        degree: 'Bachelor of Engineering in Mechatronics',
        duration: '2017 - 2021'
    }
]

const PrjectsArray = [
    {
        company: 'Constient Global Solutions',
        project_title: 'Axis CS',
        projects: [
            {
                title: 'Axis Customer Connect (Customer Application) – Integrated into Simplehai',
                description: 'Used by 5000+ customers for seamless stock market transactions. Developed & maintained a customer-facing web application with key features like Account Closure,KYC, IPO, DDPI, etc. Optimized UI performance, reducing load time by 25% and enhancing accessibility. Integrated secure APIs for real-time stock market data and customer account updates.',
            },
            {
                title: 'Axis CS Connect (Backoffice – Employee Application)',
                description: 'Built & optimized an internal back-office system used by 5,000+ Axis Bank employees. Developed an internal system for better efficiency & security. Optimized performance and debugging, increasing efficiency by 30%.',
            },
            {
                title: 'Document Processing Application (Built from Scratch)',
                description: 'Developed a document processing system from scratch, reducing manual efforts by 40%. Implemented role-based access controls (RBAC) for secure data management & compliance.',
            }
        ]
    }

]


const Main = () => {

    const aboutRef = useRef<HTMLElement>(null)
    const experienceRef = useRef<HTMLElement>(null)
    const projectsRef = useRef<HTMLElement>(null)
    const educationRef = useRef<HTMLElement>(null)
    const [refArray, setRefArray] = useState<refArrayTypes[]>([]);

    useEffect(() => {
        setRefArray([
            { ref_name: aboutRef, name: 'ABOUT', is_active: true, id: 'about' },
            { ref_name: experienceRef, name: 'EXPERIENCE', is_active: false, id: 'experience' },
            { ref_name: projectsRef, name: 'PROJECTS', is_active: false, id: 'projects' },
            { ref_name: educationRef, name: 'EDUCATION', is_active: false, id: 'education' },
        ])
    }, [])


    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        setRefArray(prev => prev.map(item => {
            if (item.id === ref.current?.id) {
                return { ...item, is_active: true };
            }
            return { ...item, is_active: false };
        }));
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    console.log(refArray)

    return (
        <div className="flex flex-col w-full h-screen md:flex-row">
            <TextAnimation animationElements="h1, p">
                <div className='w-full px-6 py-10 md:px-20 md:py-20 flex flex-col md:gap-y-2 md:justify-between md:h-full h-auto'>

                    <div className='flex flex-col gap-y-2 text-justify'>
                        <h1 className='text-5xl text-[#ffffff] font-bold'>Gokul Kandasamy</h1>
                        <p className="text-[#fdfeff] mt-2 text-xl">Frontend Developer</p>
                        <div>
                            <p className="text-custom-text-tranparent mt-1 text-lg">Specializing in React, Javascript & modern web technologies.</p>
                        </div>
                        <p className="text-[#fdfeff]">Open to exciting frontend development opportunities.</p>
                        <div className="flex items-center gap-4 mt-5 md:mt-5">
                            <EnterAnimation duration={0.4}>
                                <FaReact className="text-blue-400 text-4xl" />
                            </EnterAnimation>
                            <EnterAnimation duration={0.8}>
                                <IoLogoJavascript className="text-[#ffff00] text-4xl" />
                            </EnterAnimation>
                            <EnterAnimation duration={1.2}>
                                <FaHtml5 className="text-[#e34f26] text-4xl" />
                            </EnterAnimation>
                            <EnterAnimation duration={1.6}>
                                <FaCss3Alt className="text-[#264de4] text-4xl" />
                            </EnterAnimation>
                        </div>
                    </div>




                    <div className="md:block hidden">
                        <nav className="flex md:flex-col gap-3">
                            {refArray.map((item, index) => (
                                <div key={item?.name} onClick={() => scrollToSection(item?.ref_name)} className={`flex items-center gap-4 group cursor-pointer ${item?.is_active ? 'text-white' : 'text-[#94a3b8]'}`}>
                                    <div className={`h-[2px] w-7 m-0 transition-all duration-300 origin-left ${item?.is_active ? 'bg-white w-20' : 'bg-[#94a3b8] group-hover:w-20 group-hover:bg-white'}`} />
                                    <Link href="" className="transition-colors duration-300 group-hover:text-white font-semibold !text-lg">{item?.name}</Link>
                                </div>
                            ))}
                        </nav>
                    </div>


                    <div className="flex justify-start gap-3 mt-5 md:mt-0">
                        <EnterAnimation duration={0.4}>
                            <Link target="_blank" href="https://www.linkedin.com/in/gokul-kandasamyy/">
                                <FaLinkedin className="text-2xl text-[#94a3b8] hover:text-[#fff] cursor-pointer" />
                            </Link>
                        </EnterAnimation>
                        <EnterAnimation duration={0.8}>
                            <Link target="_blank" href="mailto:gokulkandasamyy@gmail.com">
                                <SiGmail className="text-2xl text-[#94a3b8] hover:text-[#fff] cursor-pointer" />
                            </Link>
                        </EnterAnimation>
                    </div>

                </div>
            </TextAnimation>

            <div className="md:w-1/2 w-full min-h-full md:h-screen md:overflow-y-auto px-6 md:px-7 py-10 md:pb-20 text-[#94a3b8]">
                <TransitionOptions>
                    <section ref={aboutRef} id="about" className="md:min-h-screen py-8 leading-7 text-justify">
                        <div className="w-full py-5">
                            <h1 className="font-bold text-2xl text-[#fff]">ABOUT</h1>
                        </div>
                        <div>
                            I’m Gokul Kandasamy, a frontend developer with 3 years of hands-on experience crafting intuitive and responsive web applications using modern technologies like <span className="text-white font-semibold">React.js</span> and <span className="text-white font-semibold">JavaScript (ES6+)</span>. I thrive on building elegant user interfaces that are fast, accessible, and maintainable.
                        </div>

                        <div className="mt-5">
                            At <span className="text-white font-semibold">Constient Global Solutions</span>, I have led frontend development for enterprise-grade applications, including customer-facing platforms and back-office tools used by over 5,000 Axis Bank employees. My work has directly contributed to increasing engagement and reducing system load times by up to 25%.
                        </div>

                        <div className="mt-5">
                            I’ve built large-scale React applications from the ground up, implemented scalable state management with Redux, and ensured performance optimization across devices. I'm also deeply experienced in API integration, debugging critical production issues, and applying best practices in security and clean code architecture.
                        </div>

                        <div className="mt-5">
                            My tech toolkit includes <span className="text-white font-semibold">Next JS, TypeScript, Tailwind CSS, Material-UI, Git, Webpack</span>, and more. I'm passionate about creating impactful user experiences by blending thoughtful design with solid engineering principles.
                        </div>

                        <div className="mt-5">
                            Currently, I'm open to exciting opportunities where I can contribute to innovative projects, learn from experienced teams, and continue building high-performance, user-focused web applications.
                        </div>
                    </section>
                </TransitionOptions>




                <section ref={experienceRef} id='experience' className="md:min-h-screen w-full">
                    <div className="w-full py-5">
                        <h1 className="font-bold text-2xl text-[#fff]">EXPERIENCE</h1>
                    </div>
                    {
                        ExperienceArray.map(item => {
                            return <div className="flex flex-col md:flex-row gap-5 w-full border-l border-slate-700 p-8" key={item?.company}>
                                <div className="md:w-1/4 w-full">
                                    <p>{item?.duration}</p>
                                </div>
                                <div className="md:w-3/4 w-full">
                                    <div className="w-full">
                                        <h1 className="text-[#fff] text-xl">{item?.company}</h1>
                                        <p className="mt-2 text-[#fdfeff]">{item?.position}</p>
                                        <div className="mt-3 w-full text-justify">
                                            <p>{item?.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        {
                                            item.skills.map((skill, index) => {
                                                return <span key={index} className="inline-block bg-[#132e46] text-[#5eead4] px-3 py-1 rounded-full text-sm mr-2 mb-5">{skill}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </section>



                <section ref={projectsRef} id='projects' className="md:min-h-screen w-full">
                    <div className="w-full py-5">
                        <h1 className="font-bold text-2xl text-[#fff]">PROJECTS</h1>
                    </div>
                    {
                        PrjectsArray.map(item => {
                            return <div className="text-[#fff] w-full border-l border-slate-700 p-8" key={item?.company}>
                                <h1 className="text-[#fff] text-xl font-semibold">{item?.project_title}</h1>
                                <p className="text-sm text-[#94a3b8]">{item?.company}</p>

                                <div className="mt-5 md:ml-10">
                                    {
                                        item?.projects.map((project, index) => {
                                            return <div key={index} className="border border-slate-700 p-5 mb-3 rounded-lg">
                                                <h2 className="text-[#fdfeff] text-lg font-semibold">{project?.title}</h2>
                                                <p className="mt-2 text-[#94a3b8]">{project?.description}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </section>


                <section ref={educationRef} id='education' className="w-full mt-5">
                    <div className="w-full py-5">
                        <h1 className="font-bold text-2xl text-[#fff]">EDUCATION</h1>
                    </div>
                    {
                        EducationArray.map(item => {
                            return <div className="flex flex-col md:flex-row gap-5 w-full border-l border-slate-700 p-8" key={item?.institution}>
                                <div className="md:w-1/4 w-full">
                                    <p>{item?.duration}</p>
                                </div>
                                <div className="md:w-3/4 w-full">
                                    <div className="w-full">
                                        <h1 className="text-[#fff] text-xl">{item?.institution}</h1>
                                        <p className="mt-2 text-[#fdfeff]">{item?.degree}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </section>


            </div>
        </div>
    )
}

export default Main
