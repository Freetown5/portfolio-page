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
                audience: 'United Health customer looking to ',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Quit For Life Landing Page',
                productType:'web app',
                audience: 'United Health customer looking to ',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Live Vape Free Landing Page',
                productType:'web app',
                audience: 'United Health customer looking to ',
                description: '',
                quip: '',
                toolsUsed: ''
            },
            {
                project: 'Coaching Client Configurations App',
                productType:'web app',
                audience: 'United Health customer looking to ',
                description: '',
                quip: '',
                toolsUsed: ''
            }
        ]
    },
    {
        company: "Rally Health/Optum Digital",
        position: "Sr. Software Engineer (UI)",
        dates: "August 2021 - October 2023",
        logoUrl: "./newPage/images/company_logo_folder/optum_logo.png",
        description: "Rally health was a digital health and wellness company that was aquired by Optum Digital through UnitedHealth Group. Optum Digital, United Health Groups tech organization refers to the suite of digital tools, platforms and technology enabled services offered by Optum to simplify health care and increase patient engagement and streamline administrative tasks."
    },
    {
        company: "Inspire (ClinicaHealth)",
        position: "Front End Developer",
        dates: "December 2018 - July 2021",
        logoUrl: "./newPage/images/company_logo_folder/inspire_logo.png",
        description: "Inspire is company that partners with health ailment focused organizations to provide online communication platforms and use it to inform research."
    },
    {
        company: "Capital One",
        position: "Software Engineer",
        dates: "February 2018 - November 2018",
        logoUrl: "./newPage/images/company_logo_folder/cap_one_logo.png",
        description: "A major (top 10) bank holding company known for it's extensive credit card operations, consumer banking, and commercial lending services."
    },
    {
        company: "The Washington Post",
        position: "Developer",
        dates: "October 2016 - February 2018",
        logoUrl: "./newPage/images/company_logo_folder/wapo_logo.png",
        description: "A major daily newspaper knon for it's in-depth coverage of national politics and federal government affairs."
    },
    {
        company: "Speak Agent",
        position: "Web Developer",
        dates: "August 2015 - October 2016",
        logoUrl: "./newPage/images/company_logo_folder/speak_agent_logo.png",
        description: "An educational tech (EdTech) company that produces popular digital, research-based supplemental programs for grades K-8 that improve academic language, literacy and concept mastery in math and science."
    }
];