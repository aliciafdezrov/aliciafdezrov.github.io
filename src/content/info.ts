export const info = {
  academic: {
    degrees: [
      {
        name: "The official react query course",
        location: "Query.gg",
        date: "Nov 2024",
        description:
          "Official TanStack Query course covering advanced React server-state management, data caching, synchronization, and performance optimization techniques.",
      },
      {
        name: "First Certificate in English",
        location: "Cambridge Assessment English",
        date: "Jul 2021",
      },
      {
        name: "Master's Degree in Frontend Development and UX",
        location: "Lemoncode",
        date: "Sept 2021 - Jun 2022",
        description:
          "Lemoncode Frontend Master’s Program focused on modern JavaScript frameworks, frontend architecture, testing, deployment, and full project development using industry-standard tools and collaborative workflows.",
      },
      {
        name: "Bachelor's Degree in Health Engineering",
        location: "University of Málaga",
        date: "Sept 2013 - Sept 2017",
        description: "Specialization in Bioinformatics",
      },
    ],
    languages: [
      {
        name: "Spanish",
        description: "Native language",
      },
      {
        name: "English",
        description: "B2 First (Score 177) Cambridge Assessment English",
      },
    ],
    projects: [
      {
        name: "Optimization Seminar for Gene Network Reconstruction",
        date: "2015",
        location: "University of Málaga",
        description:
          "Attended a three-month seminar at the University of Málaga focused on optimization techniques for gene network reconstruction using metaheuristic approaches.",
      },
      {
        name: "Android Application Development for COPD Patients",
        date: "2016",
        location: "University of Málaga",
        description:
          "Participated in the development of an Android application designed to improve treatment adherence for patients with Chronic Obstructive Pulmonary Disease (COPD) over a four-month period. The application was subsequently presented at the Andalusian Health Challenge.",
      },
      {
        name: "Educational Innovation Project in Biology and Omics Sciences",
        date: "2016",
        location: "University of Málaga",
        description:
          "Conducted a study on phylogenetic inference problems as part of a research project at the University of Málaga.",
      },
      {
        name: "Heatmap Generation Application",
        date: "2017-2018",
        location: "University of Málaga",
        description:
          "Designed, developed, and maintained an application for generating heatmaps from gene expression data, enabling subsequent clinical analysis. This project originated from a research grant.",
      },
    ],
  },
  experience: {
    jobs: [
      {
        role: "Senior Frontend Developer",
        date: "May 2022 - Present",
        company: "IriusRisk",
        keyContributions: [
          "Led ~60% of the product migration from legacy Vaadin app to React while maintaining production releases, ensuring uninterrupted client service and scaling revenue from ~6M USD ARR in 2022 to >20M ARR in 2025",
          "Collaborated closely with product, UX/UI, and backend teams and actively participated in multiple end-to-end product discovery cycles (including ideation and assumption mapping) to deliver user-focused solutions aligned with large-scale customer needs.",
          "Owned end-to-end delivery of initiatives from early technical shaping and risk analysis to functional validation and release readiness, with an average development lead time of ~28 days per initiative.",
          "Designed and rolled out a frontend testing pyramid, reducing functional testing time from up to ~17 days to 1–6 day windows while improving release stability. Improved delivery quality over time, reducing bug fix rate from 8–11 bugs in early large initiatives to 0–3 bugs in later deliveries (avg. 3.8 bugs per initiative). Led technical training sessions for senior frontend engineers to standardize the testing pyramid approach across teams, improving shared quality practices and reducing regression risk.",
          "Drove frontend architectural improvements including adoption of TanStack Query, introduction of modular endpoint construction to remove duplicated API definitions, and use of reusable compound component patterns to improve scalability and maintainability. Enabling enterprise readiness and large-scale customer adoption (100s to 10s of thousands of users).",
          "Developed and scaled enterprise-grade admin capabilities including RBAC configuration, granular permission management (>1000 permissions), and integrations with external issue trackers (Jira, Rally, Azure DevOps, ServiceNow) supporting high-volume ticket workflows.",
        ],
      },
      {
        role: "Frontend Developer",
        date: "Apr 2020 - May 2022",
        company: "ITRS Group",
        keyContributions: [
          "Architected a micro-frontend system using Webpack Module Federation and React for Active Dashboard, decoupling deployment of dashboard modules across a real-time monitoring product used by largest global investment banks (3,000+ enterprise clients).",
          "Built high-density, real-time data visualization components with React and D3.js for financial trading environments.",
          "Drove frontend performance optimization for a React application handling high-frequency real-time data streams, identifying and resolving rendering bottlenecks to ensure reliability for financial operations teams monitoring live trading infrastructure.",
        ],
      },
      {
        role: "FullStack Developer",
        date: "Jan 2018 - Apr 2020",
        company: "GSL",
        keyContributions: [
          "Drove frontend migration from a legacy PHP platform to React/TypeScript with Redux, integrating a centralized authentication microservice shared across multiple application stacks; the modernized platform supported the company's expansion from Spain into the Mexican market.",
        ],
      },
      {
        role: "Junior FullStack Developer",
        date: "Sept 2016 - Jan 2018",
        company: "University of Málaga",
        keyContributions: [
          "Built a React and TypeScript-first codebase mobile SPA integrating Bluetooth beacon data to surface real-time parking occupancy across university facilities.",
        ],
      },
    ],
  },
  technicalSkills: [
    {
      category: "Frontend",
      values: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "React router", icon: "react-router" },
        { name: "TanStack Query", icon: "tanstack-query" },
      ],
      description: "",
    },
    {
      category: "Architecture & Patterns",
      values: [
        { name: "Feature-based architecture", icon: "stack" },
        { name: "State management patterns", icon: "gear" },
        { name: "Clean Architecture", icon: "tree-structure" },
        { name: "React design patterns", icon: "puzzle" },
        { name: "Performance optimization", icon: "lightning" },
      ],
      description: "",
    },
    {
      category: "State Management",
      values: [
        { name: "Zustand", icon: "" },
        { name: "Redux", icon: "redux" },
        { name: "Context API", icon: "" },
      ],
      description: "",
    },
    {
      category: "Languages",
      values: [
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript (ES6+)", icon: "javascript" },
      ],
      description: "",
    },
    {
      category: "Styling/UI",
      values: [
        { name: "CSS", icon: "css" },
        { name: "SCSS", icon: "sass" },
        { name: "BEM", icon: "" },
        { name: "styled-components", icon: "styled-components" },
        { name: "responsive design", icon: "" },
        { name: "accesibility (WCAG/ARIA)", icon: "" },
      ],
      description: "",
    },
    {
      category: "Testing",
      values: [
        { name: "Unit (Jest, Vitest)", icon: "jest" },
        { name: "Component (Cypress)", icon: "cypress" },
        { name: "End-to-End (Cypress, Playwright)", icon: "" },
      ],
      description: "",
    },
    {
      category: "Build Tools & Tooling",
      values: [
        { name: "Webpack", icon: "webpack" },
        { name: "Vite", icon: "vite" },
        { name: "Parcel", icon: "" },
        { name: "Rspack", icon: "" },
      ],
      description: "",
    },
    {
      category: "Other tools",
      values: [
        { name: "Git", icon: "git" },
        { name: "CI/CD pipelines", icon: "" },
        { name: "Figma", icon: "figma" },
        { name: "Micro-Frontend (Webpack Module Federation)", icon: "" },
      ],
      description: "",
    },
  ],
  personalInfo: {
    name: "Alicia Fernández",
    role: "Senior Frontend Developer",
    description:
      "Senior Frontend Engineer / Developer with technical ownership over major product modernization efforts, responsible for complex end-to-end initiatives impacting architecture, quality, and stability. Combines deep engineering expertise with formal UX training (Master in Frontend UX) to bridge product, design, and engineering at scale. Specialized in React/TypeScript ecosystems, frontend architecture, and building testing cultures that elevate the technical level of teams.",
    socialMedia: [
      {
        media: "LinkedIn",
        link: "https://www.linkedin.com/in/afdezrov",
        icon: "linkedin",
      },
      {
        media: "Email",
        link: "mailto:aliciafdezrov@gmail.com",
        icon: "email",
      },
      {
        media: "Github",
        link: "https://github.com/aliciafdezrov",
        icon: "github",
      },
    ],
  },
};
