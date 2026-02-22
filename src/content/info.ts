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
        date: "Jul 21",
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
          "Led the migration of a legacy app to React while maintaining production releases, ensuring uninterrupted client service and supporting platform scalability during growth from ~6M USD ARR in 2022 to >20M ARR in 2025 (>30% YoY growth, >99.99% SLA).",
          "Implemented a comprehensive automated testing strategy (unit, component, e2e) for the frontend, accelerating release cycles to ~4 releases per month and ~2k deployments per quarter while sustaining continuous delivery of value and innovation.",
          "Acted as Frontend Tech Lead, driving key architectural decisions, defining frontend standards, and mentoring junior developers while preparing the UI platform for enterprise readiness and large-scale customer adoption (100s to 10s of thousands of users).",
          "Collaborated closely with product, UX/UI, and backend teams and actively participated in multiple end-to-end product discovery cycles (user interviews, ideation, assumption mapping) to deliver user-focused solutions aligned with large-scale customer needs.",
          "Built and scaled frontend integrations supporting 1000s of Issue Tracker connections across Jira, Rally, Azure DevOps (TFS), and ServiceNow, enabling customers to manage 10s of thousands of tickets through high-performance, reliable UI workflows.",
        ],
      },
      {
        role: "Frontend Developer",
        date: "Apr 2020 - May 2022",
        company: "ITRS Group",
        keyContributions: [
          "Developed real-time dashboards to monitor server status and ensure high availability, handling large volumes of data for continuous updates and enabling proactive detection of incidents that reduced operational risk and service disruption in mission-critical financial systems.",
          "Contributed to a micro-frontend architecture using Webpack Module Federation, improving modular delivery across complex monitoring interfaces and supporting faster evolution of enterprise observability features for large-scale financial clients.",
          "Built scalable React applications with robust state management and routing, collaborating closely with design, QA, and product to deliver data-intensive UIs that provided real-time visibility into infrastructure health and business-critical processes.",
        ],
      },
      {
        role: "FullStack Developer",
        date: "Jan 2018 - Apr 2020",
        company: "GSL",
        keyContributions: [
          "Built internal company tools using React (frontend) and Java/MySQL (backend).",
          "Implemented CI/CD pipelines for automated releases.",
        ],
      },
      {
        role: "Junior FullStack Developer",
        date: "Sept 2016 - Jan 2018",
        company: "University of Málaga",
        keyContributions: [
          "Worked in a Big Data research team, developing internal tools with React, Java, and MongoDB.",
          "Gained early experience in frontend development while completing degree studies",
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
        { name: "Tanstack Query", icon: "tanstack-query" },
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
      category: "Languages",
      values: [
        { name: "Typescript", icon: "typescript" },
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
        { name: "accesibility (WCAG/ARIA)", icon: ""}
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
      "Senior Frontend Developer with 9+ years of experience building scalable, high-quality web applications using React, TypeScript, and Next.js. Skilled in unit, component, and end-to-end testing (Jest, Vitest, Cypress, Playwright) and modern frontend tooling (Webpack, Vite, Parcel, Rspack). Experienced in working closely with product, UX/UI, and backend teams to deliver solutions that are not only technically solid but genuinely meet user needs, ensuring an optimal user experience.",
    socialMedia: [
      {
        media: "LinkedIn",
        link: "https://www.linkedin.com/in/alicia-fern%C3%A1ndez-rovira-70885811a",
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
