export interface employmentEntry {
    company: string,
    position: string,
    dates: string,
    logoUrl: string,
    description: string
}

export const employmentData = [
    {
        company: "RVO Health",
        position: "Senior Software Engineer (UI)",
        dates: "October 2023 - November 2025",
        logoUrl: "./newPage/images/company_logo_folder/rvo_health_logo.png",
        description: "A company built around helping users find information regarding their health. Their product portfolio includes companies like Healthline and products like Real appeal (used to help with weight loss) and Quit for Life (used to help users quit smoking).",
        selectContent:[
            {
                project: 'Coaching App (Q4L program)',
                productType:'web app',
                audience: 'Residents of states and companies with public health programs.',
                description: 'A web application that houses several programs designed to help users (residents and clients) gain control of their health by losing weight, quitting smoking or manage a host of other issues.',
                quip: 'This app was originally created by a Rally before it was aquired by Optum digital and spun off into RVO Health.',
                toolsUsed: 'Angular 12, RxJs, NgRx, Contentful etc.'
            },
            {
                project: 'Quit For Life Landing Page',
                productType:'web app',
                audience: 'Residents of states and customers of multiple comapanies and insurance provides.',
                description: 'This is the web app that contains general information about the coaching applications program for quitting smoking. It also helps direct users to the correct version of the program for them based off of state and insurance provider information.',
                quip: 'This page was originally built in wordpress before the company decided to transition to a more modern and secure architecture set up (Next.js/Netlify).',
                toolsUsed: 'Next.JS (React), Typescript, Netlify, Github Actions, Google Translate, next-Intl, Tailwind CSS, Wordpress (old site), Javascript (old site)'
            },
            {
                project: 'Live Vape Free Landing Page',
                productType:'web app',
                audience: 'Residents of different states and customers of several companies and insurance providers',
                description: 'This web app contains general information about the coaching applications program for quitting vaping.',
                quip: 'This was originally a static web page. It was converted to a Next.js application (on my recommendation), when an extra page that required multiple similar component was included in the redesign.',
                toolsUsed: 'Next.JS (React), Typescript, Tailwind CSS, Netlify, Github Actions'
            },
            {
                project: 'Coaching Client Configurations App',
                productType:'web app',
                audience: 'Commercial companies and state clients',
                description: 'This is the web application used by account managers to help different companies and states to customize the coaching app for their customers and residents.',
                quip: 'This was one of the few internal tools thats used primarily by workers instead of being direct to consumer.',
                toolsUsed: 'React, Company UI Library, Redux'
            }
        ]
    },
    {
        company: "Rally Health/Optum Digital",
        position: "Sr. Software Engineer (UI)",
        dates: "August 2021 - October 2023",
        logoUrl: "./newPage/images/company_logo_folder/optum_logo.png",
        description: "Rally health was a digital health and wellness company that was aquired by Optum Digital through UnitedHealth Group. Optum Digital, United Health Groups tech organization refers to the suite of digital tools, platforms and technology enabled services offered by Optum to simplify health care and increase patient engagement and streamline administrative tasks.",
        selectContent: [
            {
                project: 'Rally Design System (RDS)',
                productType:'UI Component Library',
                audience: 'Front-end and Full-stack application engineers at Rally',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Orion Design System',
                productType:'UI Component Library',
                audience: 'Front-end and Full-stack application engineers at Optum',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Better.UI Design System',
                productType:'UI Component Library',
                audience: 'Front-end and Full-stack application engineers at Optum',
                description: '',
                quip: '',
                toolsUsed: ''
            }
        ]
    },
    {
        company: "Inspire (ClinicaHealth)",
        position: "Front End Developer",
        dates: "December 2018 - July 2021",
        logoUrl: "./newPage/images/company_logo_folder/inspire_logo.png",
        description: "Inspire is company that partners with health ailment focused organizations to provide online communication platforms and use it to inform research.",
        selectContent: [
            {
                project: 'Component Library',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Resource Center',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Treatment Pages',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Search Page',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            }
        ]
    },
    {
        company: "Capital One",
        position: "Software Engineer",
        dates: "February 2018 - November 2018",
        logoUrl: "./newPage/images/company_logo_folder/cap_one_logo.png",
        description: "A major (top 10) bank holding company known for it's extensive credit card operations, consumer banking, and commercial lending services.",
        selectContent: [
            {
                project: 'Workbench',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
        ]
    },
    {
        company: "The Washington Post",
        position: "Developer",
        dates: "October 2016 - February 2018",
        logoUrl: "./newPage/images/company_logo_folder/wapo_logo.png",
        description: "A major daily newspaper knon for it's in-depth coverage of national politics and federal government affairs.",
        selectContent: [
            {
                project: 'Wapo Feeds',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Book Best Sellers App',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Notification Tool',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Elections App',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            }
        ]
    },
    {
        company: "Speak Agent",
        position: "Web Developer",
        dates: "August 2015 - October 2016",
        logoUrl: "./newPage/images/company_logo_folder/speak_agent_logo.png",
        description: "An educational tech (EdTech) company that produces popular digital, research-based supplemental programs for grades K-8 that improve academic language, literacy and concept mastery in math and science.",
        selectContent: [
            {
                project: '',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: '',
                productType:'',
                audience: '',
                description: '',
                quip: '',
                toolsUsed: ''
            },
        ]
    }
];