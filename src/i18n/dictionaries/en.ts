export const en = {
  metadata: {
    title: "Alicia Fernandez | Senior Frontend Developer",
    description: "React · Typescript",
  },
  header: {
    region: "Europe/Spain",
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
    },
    ariaLabels: {
      about: "Navigate to About Me section",
      experience: "Navigate to Experience section",
      skills: "Navigate to Skills section",
      education: "Navigate to Education section",
      langSwitcher: "Switch to Spanish",
    },
  },
  footer: {
    madeWith: "Made with",
    from: "from Spain",
  },
  sections: {
    workExperience: "Work Experience",
    technicalExpertise: "Technical Expertise",
    educationAndCertifications: "Education & Certifications",
  },
  aboutMe: {
    role: "Senior Frontend Developer",
    description:
      "Senior Frontend Engineer / Developer with technical ownership over major product modernization efforts, responsible for complex end-to-end initiatives impacting architecture, quality, and stability. Combines deep engineering expertise with formal UX training (Master in Frontend UX) to bridge product, design, and engineering at scale. Specialized in React/TypeScript ecosystems, frontend architecture, and building testing cultures that elevate the technical level of teams.",
  },
  experience: {
    jobs: [
      {
        role: "Senior Frontend Developer",
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
        keyContributions: [
          "Architected a micro-frontend system using Webpack Module Federation and React for Active Dashboard, decoupling deployment of dashboard modules across a real-time monitoring product used by largest global investment banks (3,000+ enterprise clients).",
          "Built high-density, real-time data visualization components with React and D3.js for financial trading environments.",
          "Drove frontend performance optimization for a React application handling high-frequency real-time data streams, identifying and resolving rendering bottlenecks to ensure reliability for financial operations teams monitoring live trading infrastructure.",
        ],
      },
      {
        role: "FullStack Developer",
        keyContributions: [
          "Drove frontend migration from a legacy PHP platform to React/TypeScript with Redux, integrating a centralized authentication microservice shared across multiple application stacks; the modernized platform supported the company's expansion from Spain into the Mexican market.",
        ],
      },
      {
        role: "Junior FullStack Developer",
        keyContributions: [
          "Built a React and TypeScript-first codebase mobile SPA integrating Bluetooth beacon data to surface real-time parking occupancy across university facilities.",
        ],
      },
    ],
  },
  education: {
    degrees: [
      {
        name: "The official react query course",
        description:
          "Official TanStack Query course covering advanced React server-state management, data caching, synchronization, and performance optimization techniques.",
      },
      {
        name: "First Certificate in English",
      },
      {
        name: "Master's Degree in Frontend Development and UX",
        description:
          "Lemoncode Frontend Master's Program focused on modern JavaScript frameworks, frontend architecture, testing, deployment, and full project development using industry-standard tools and collaborative workflows.",
      },
      {
        name: "Bachelor's Degree in Health Engineering",
        description: "Specialization in Bioinformatics",
      },
    ],
  },
  skills: {
    categories: [
      { category: "Frontend" },
      { category: "Architecture & Patterns" },
      { category: "State Management" },
      { category: "Languages" },
      { category: "Styling/UI" },
      { category: "Testing" },
      { category: "Build Tools & Tooling" },
      { category: "Other tools" },
    ],
  },
};
