export const PERSONAL_INFO = {
  name: "Walter M. R. Manske",
  role: "Software Engineer",
  location: "Brazil",
  email: "waltermatheusrm@gmail.com",
  linkedin: "https://www.linkedin.com/in/walter-retke/",
  github: "https://github.com/walterretke",
};

export const TECH_STACK = [
  { category: "Languages", items: ["Java", "JavaScript", "PHP", "SQL"] },
  { category: "Frameworks", items: ["Spring Boot", "Next.js", "React", "Laravel"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Git", "Keycloak"] },
];

export const EXPERIENCE = [
  {
    company: "WEG",
    role: "Software Engineer",
    period: "06/2025 – Present",
    description: [
      "Spearheaded the end-to-end global implementation of Microsoft Dynamics, driving the project from initial conception and an MVP in Africa to full-scale rollouts in Brazil, Germany, and the US.",
      "Engineered scalable RESTful APIs using Java 17+ and Spring Boot for the EASY System.",
      "Drove the architectural migration and continuous maintenance of microservices.",
      "Resolved critical L3 production issues by diagnosing complex system behaviors.",
    ],
  },
  {
    company: "WEG",
    role: "Software Engineering Intern",
    period: "08/2024 – 06/2025",
    description: [
      "Co-architected the transition of a legacy monolithic goal-setting system into a cloud-native microservices architecture.",
      "Developed full-lifecycle features by building a Next.js/React frontend with a custom TypeScript design system.",
      "Implemented automated CI/CD pipelines via Jenkins and centralized authentication using Keycloak.",
    ],
  },
  {
    company: "Rauzee",
    role: "Software Engineer",
    period: "01/2024 – 08/2024",
    description: [
      "Engineered scalable microservices and RESTful APIs using Java and Spring Boot.",
      "Orchestrated application deployments and container management utilizing Docker and Kubernetes.",
      "Built responsive frontend architectures with Next.js and React.",
    ],
  },
  {
    company: "Self Employed",
    role: "Software Engineer (Independent Contractor)",
    period: "08/2021 – 01/2024",
    description: [
      "Partnered with IT companies to design, develop, and deploy scalable software solutions, e-commerce platforms, and institutional websites.",
      "Modernized legacy applications by migrating frontend architecture to Next.js, achieving a 150% increase in performance.",
      "Optimized e-commerce platforms and checkout flows, resulting in a 40% increase in processing speed and 20% conversion growth.",
      "Developed full-stack web and mobile applications using Java, Spring Boot, React, and Flutter, orchestrating deployments with Kubernetes.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Tramitta: B2B SaaS Platform",
    description: "A full-stack B2B onboarding platform designed to streamline vendor registration and document management.",
    tech: ["Next.js", "React", "Java 17+", "Spring Boot", "AWS (EC2, RDS, S3)", "Docker"],
    impact: "Secured the platform with robust OAuth2/OIDC authentication flows, ensuring data privacy and strict access control.",
  },
];

export const EDUCATION = {
  institution: "Catholic University of Santa Catarina",
  degree: "B.S. Software Engineering",
  period: "Jan 2024 – Dec 2027",
  details: "Certificate: Mathematics",
};
