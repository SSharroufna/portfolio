
import { Project, Skill, Experience, Education } from './types';

export const PERSONAL_INFO = {
    name: "Sarah Sharroufna",
    title: "Frontend Developer",
    bio: "I’m an entrepreneurial builder turning big ideas into products people love. Passionate about AI and human-centered design, I create technology that feels simple, helpful, and personal. I’m committed to growing, experimenting, and bringing innovative concepts to life.",
    email: "SarahSharroufna@gmail.com",
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    }
};

export const SKILLS: Skill[] = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js (Express)" },
    { name: "RESTful APIs" },
    { name: "Spring Boot" },
    { name: "Java" },
    { name: "C++" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "Figma" },
    { name: "Vitest & Storybook" },
];

export const PROJECTS: Project[] = [
    {
        title: "Okaya AI - Health Screening Platform",
        description: "Transformed prototypes into a production-ready health app using React & Next.js.",
        problem: "Mental health tools often lack accessibility and performance, discouraging user engagement. The goal was to transform a prototype into a robust production app.",
        solution: "Translated Figma designs into high-fidelity, responsive React/Next.js pages, focusing on accessibility and a smooth user experience.",
        technicalDetails: "Leveraged React Query for efficient state management and caching. Optimized payloads for performance, implemented Vitest testing, and maintained a Storybook component library for UI consistency.",
        tags: ["React", "Next.js", "Tailwind CSS", "React Query", "Vitest"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Prism - LMS Platform",
        description: "Built an LMS with AI feedback and analytics, leading UI/UX from concept to code.",
        problem: "Digital awareness education lacked personalization and effective progress tracking over the 8-week course duration.",
        solution: "Created a comprehensive LMS with personalized coach feedback and AI-powered insights, leading UI/UX from wireframes to final prototype.",
        technicalDetails: "Integrated Strapi CMS for dynamic content and RESTful APIs for real-time analytics. Implemented Role-Based Access Control (RBAC) for secure student and coach management.",
        tags: ["React", "Next.js", "Tailwind CSS", "Strapi CMS"],
        imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Shared Daily Reflection App",
        description: "Anonymous reflection app with real-time updates and server-side rendering.",
        problem: "Individuals often lack a safe, anonymous space to express daily emotions and connect with others sharing similar feelings.",
        solution: "Built a community-driven app for anonymous daily reflections and mood tagging to foster shared emotional experiences.",
        technicalDetails: "Utilized Next.js for Server-Side Rendering (SSR) to ensure fast loads. Built custom API routes for data handling and optimized performance with code-splitting.",
        tags: ["React", "Next.js", "Tailwind CSS", "API Routes"],
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Cook Book App",
        description: "Recipe management hub allowing users to browse, save, and organize collections.",
        problem: "Home cooks struggle to organize recipes from scattered sources, leading to cluttered bookmarks and lost culinary ideas.",
        solution: "Developed a central hub for users to browse, save, and organize recipes into personal collections for easy access.",
        technicalDetails: "Designed a PostgreSQL schema for data persistence and CRUD operations. Integrated the Spoonacular API for dynamic recipe fetching and error handling.",
        tags: ["PostgreSQL", "Spoonacular API", "Web Dev"],
        imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        repoUrl: "#"
    }
];

export const EXPERIENCE: Experience[] = [
    {
        company: "Okaya AI",
        role: "Front End Developer (Co-op)",
        period: "Dec 2024 - Present",
        description: [
            "Developed responsive web pages from Figma prototypes using React & Next.js.",
            "Integrated backend APIs with React Query for efficient data handling.",
            "Optimized payload sizes to minimize network requests and improve performance.",
            "Implemented Vitest tests and maintained Storybook for UI consistency."
        ],
        logo: "https://ui-avatars.com/api/?name=Okaya+AI&background=6366f1&color=fff&size=128"
    },
    {
        company: "Office of Information Technology, CU Boulder",
        role: "IAM Analyst Assistant",
        period: "Dec - May 2025",
        description: [
            "Executed SQL queries to troubleshoot and resolve user access issues.",
            "Collaborated in an Agile environment using Jira for task management.",
            "Documented issue resolutions and system updates for future reference."
        ],
        logo: "https://logo.clearbit.com/colorado.edu"
    },
    {
        company: "Prism",
        role: "Full Stack Developer",
        period: "Aug - Dec 2024",
        description: [
            "Built 10+ accessible web pages using React, Next.js, and Tailwind CSS.",
            "Led UI/UX design from ideation to prototype for intuitive interfaces.",
            "Integrated RBAC, AI-powered feedback, and user analytics dashboards.",
            "Implemented RESTful APIs using Strapi CMS for backend content management."
        ],
        logo: "https://ui-avatars.com/api/?name=Prism&background=ec4899&color=fff&size=128"
    }
];

export const EDUCATION: Education[] = [
    {
        institution: "University of Colorado Boulder",
        degree: "B.A. in Computer Science | Minor in Creative Technology & Design",
        period: "Aug 2021 – May 2026 (expected)",
        details: "GPA: 3.85/4 | Transfer Student excellent scholarship 2022-2024"
    }
];
