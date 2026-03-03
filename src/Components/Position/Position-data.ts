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
                description: "A component library that was a part of Rally Health's full design system. It was made up of components and design tokens built to be compatible with React, Angular and static websites.",
                quip: 'This product was used in the coaching app that was aquired by RVO Health.',
                toolsUsed: 'React, Angular, Storybook, HTML, CSS, Github Actions'
            },
            {
                project: 'Orion Design System',
                productType:'UI Component Library',
                audience: 'Front-end and Full-stack application engineers at Optum',
                description: "Another component library that combined both Rally Health and Optum's design system. It was made up of components and design tokens built to be compatible with React, Angular and static websites.",
                quip: 'This product was the first that required us to work with another team in order to merge and release it.',
                toolsUsed: 'React, Angular, Storybook, HTML, CSS, Github Actions, Nx, Node fs'
            },
            {
                project: 'Better.UI Design System',
                productType:'UI Component Library',
                audience: 'Front-end and Full-stack application engineers at Optum',
                description: "A brand new component library with a new design meant further streamline Optum's designs across multiple smaller organizations (aquired companies). It was designed to not only work with brand new projects utilizing a host of different technologies but also designed to be consumed by other pre-existing design systems.",
                quip: 'This component library included an image library that used a script writen using Nodes filesystem to generate 3 different versions of wrappers for each of the 500 images. These wrappers made them useful in Angular, React and any project that requred an svg component.',
                toolsUsed: 'React, Angular, HTML, CSS, Github Actions, Node fs'
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
                project: "Inspire's Component Library",
                productType:'Component Library',
                audience: 'company engineers',
                description: 'A UI library used to ',
                quip: 'This idea for this library was pitched by me to handle the proliferation of apps we integrated into our main product while moving it off older technology.',
                toolsUsed: 'Angular.js, Contentful, S3'
            },
            {
                project: 'Resource Center',
                productType:'single page application (SPA)',
                audience: "Google's web scrapper",
                description: 'Essentially a micro-frontend integrated into our main product, designed to increase our companies SEO results.',
                quip: "The product designer for this decided to create based on the CEO's wish that more people be included in the general pipeline to the page",
                toolsUsed: 'Angular, Python, Contentful, AWS Lambda, AWS S3'
            },
            {
                project: 'Treatment Pages',
                productType:'Single Page Application (SPA)',
                audience: 'medication users',
                description: 'Individual pages that give users tons of pertinent information about specific medications in addition to patient feedback',
                quip: 'These pages are directed to from a separate app run on the same website',
                toolsUsed: 'Angular, Python, Contentful, AWS Lambda, AWS S3'
            },
            {
                project: 'Search Page',
                productType:'Progressive Web App (PWA)',
                audience: 'medication users',
                description: 'This was the page used to search for medications that had treatment pages',
                quip: 'This page includes shortlinks to heavily used pages',
                toolsUsed: 'Angular.js, Contentful, S3'
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
                productType:'web application',
                audience: 'banking account managers',
                description: 'This application was an internal product used to manage company specific transactions.',
                quip: 'The idea for this project came from an engineer that was eventually promoted to product before choosing to go back to engineering.',
                toolsUsed: 'Angular.js (1.6), Java, Spring'
            },
        ]
    },
    {
        company: "The Washington Post",
        position: "Developer",
        dates: "October 2016 - February 2018",
        logoUrl: "./newPage/images/company_logo_folder/wapo_logo.png",
        description: "A major daily newspaper known for it's in-depth coverage of national politics and federal government affairs.",
        selectContent: [
            {
                project: 'Wapo Feeds',
                productType:'Application Protocol Interface (API)',
                audience: 'Social Media Users who were Washington Post readers',
                description: 'This API was used to format Washington Post content for usage with multiple social media platforms including Apple News, Facebook pages and MSN',
                quip: 'This was one of the first fully backend projects I got to work on professionally',
                toolsUsed: 'Python, Flask'
            },
            {
                project: 'Book Best Sellers App',
                productType:'Single Page Application (SPA)',
                audience: 'Washington Post readers looking for the most popular books',
                description: 'This was a web application that pulled from Amazon data about bestselling books and formatted the content into a page on the Washington Post website.',
                quip: 'This project was fully containerized and there for very easy to run on pretty much any machine. It was one of my first times seeing the benefits of working with tools like Docker.',
                toolsUsed: 'Angular, Node.js, MongoDB, Docker'
            },
            {
                project: 'AMP Notification Tool',
                productType:'Webhook',
                audience: "Engineers who used the Washington Post's slack channel to monitor out online products statuses.",
                description: "This was a webhook that sent information on the status (primarily when errors came up) of the company's Accelerated Mobile Pages (AMP)",
                quip: 'Serverless, a popular tool used for setting up Lambda functions, was still in beta when this was originally released. We did eventually end up having to update everything.',
                toolsUsed: 'Node.js, AWS Lambda, Serverless'
            },
            {
                project: 'Elections App',
                productType:'Single Page Web Application',
                audience: 'Both casual and regular Washington Post readers',
                description: 'Readers looking to find up to date information about the then 2016 elections',
                quip: 'The Engineering manager (my boss) had to stay in the war room overnight on election night to make sure nothing went wrong with this app among others.',
                toolsUsed: 'React.js, Python, Flask, Chart.js'
            },
            {
                project: 'March Madness Sports Pages',
                productType: 'Web application',
                audience: 'Washington Post readers who are interested in sports',
                description: 'This was an app that not only produced reference pages with information on multiple basketball teams but also contained a brackets application that users could play',
                quip: 'Working with the original reference pages meant figuring out how to override 5 different stylesheets (we had no time to clean anything up and the app was 7 years old)',
                toolsUsed: 'Python, Flask, Jinja, CSS'
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
                project: 'Standard Speak Agent Application',
                productType:'Hybrid Mobile Application',
                audience: 'elementary school students with autism',
                description: 'This was another gameified app used to give neurodivergent students extra assistance with learning.',
                quip: 'We used Ionic for this project before it became framework agnostic. At the time, you could only use it with Angular.js.',
                toolsUsed: 'Angular.js (1.4), Ionic, Python, Django'
            },
            {
                project: 'Language Learning app',
                productType: 'Single Page Application',
                audience: 'elementary school level ESL Students',
                description: 'A gamified image based app that taught young users english',
                quip: 'Pretty much the first thing I worked on professionally after finishing a programming bootcamp',
                toolsUsed: 'Angular.js (1.4), Python, Django'
            },
        ]
    }
];