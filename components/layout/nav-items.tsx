export const navItems = [
  {
    label: "Home",
    href: "#home",
    type: "Dashboard",
    color: "#3B82F6",
    icon: (
      <path d="M3 9.5 10 3l7 6.5M5 8v9h10V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    type: "Pipeline",
    color: "#00C7BE",
    icon: (
      <path d="M4 6h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V6zM7 6V4.5A1.5 1.5 0 018.5 3h3A1.5 1.5 0 0113 4.5V6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    type: "Lakehouse",
    count: "03",
    color: "#3B82F6",
    icon: (
      <>
        <rect x="3" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    type: "Semantic model",
    color: "#F2C811",
    icon: (
      <path d="M10 2l1.9 4.6L17 7.2l-3.8 3.3L14.2 16 10 13.2 5.8 16l1-5.5L3 7.2l5.1-.6L10 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    ),
  },
  {
    label: "Certifications",
    href: "#certifications",
    type: "Dataflow",
    color: "#00C7BE",
    icon: (
      <>
        <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 12.5L6.5 18l3.5-2 3.5 2-1-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    type: "Notebook",
    color: "#F2C811",
    icon: (
      <path d="M3 5h14v10H3V5zM3 5l7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
];