import Constient from '../../../public/constient_global_solutions_logo.jpg'
import Axis from '../../../public/axis.png'
import School from '../../../public/school.jpg'
import College from '../../../public/kongu_engineering.jpg'

export const ExperienceArray = [
    {
        company: 'Constient Global Solutions',
        logo: Constient,
        position: 'Junior Software Engineer',
        duration: 'May 2022 - Present',
        website:'https://www.constient.com/',
        description: 'Developed & optimized React.js applications, increasing user engagement by 15%. Led UI performance enhancements, reducing load time by 25% and improving accessibility. Troubleshot and resolved high-priority production issues, improving system efficiency by 30% under strict deadlines, Designed & implemented Redux state management, ensuring scalable & responsive applications. Integrated & secured APIs, working with backend teams for seamless data flow. Reviewed code & mentored junior developers, ensuring best coding practices and clean architecture.',
        skills: ['React.js', 'JavaScript (ES6+)', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI', 'Bootstrap', 'Reactstrap', 'Redux', 'Git']
    }
]

export const EducationArray = [
    {
        institution: 'Kongu Engineering College',
        degree: 'Bachelor of Engineering in Mechatronics',
        duration: '2017 - 2021',
        website:'https://kongu.ac.in/',
        logo: College,
        percentage:'69%'
    },
    {
        institution: 'Shri Mahaa Higher Secondary School',
        degree: 'HSC',
        duration: '2017',
        website:'https://schools.org.in/erode/33100501210/sri-mahaa-higher-secondary-school-ingur.html',
        logo: School,
        percentage:'81%'
    },
    {
        institution: 'Shri Mahaa Higher Secondary School',
        degree: 'SSLC',
        duration: '2015',
        website:'https://schools.org.in/erode/33100501210/sri-mahaa-higher-secondary-school-ingur.html',
        logo: School,
        percentage:'92%'
    }
]

export const PrjectsArray = [
    {
        company: 'Constient Global Solutions',
        logo: Axis,
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
