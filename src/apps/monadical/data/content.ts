export interface HeroContent {
  heading: string;
  subheading: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface AIDepartment {
  name: string;
  capabilities: string[];
}

export interface ConsultingService {
  title: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  type: "client" | "open-source";
  impact?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  country: string;
  countryFlag: string;
  description: string;
  category: "founder" | "leadership" | "engineering" | "specialized" | "operations";
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface OfficeLocation {
  name: string;
}

export interface CompanyStat {
  label: string;
  value: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const heroContent: HeroContent = {
  heading: "Transform your organization in the Age of AI",
  subheading: "Monadical helps organizations safely harness the power of AI to redesign the way they work.",
  primaryCta: { label: "Book a Call", href: "mailto:hello@monadical.com" },
  secondaryCta: { label: "Learn More", href: "#services" },
};

export const companyStats: CompanyStat[] = [
  { label: "Founded", value: "2016" },
  { label: "Engineers", value: "22+" },
  { label: "Countries", value: "6" },
];

export const aiDepartments: AIDepartment[] = [
  { name: "Engineering", capabilities: ["Code generation", "Refactoring", "QA/testing", "Project management", "Knowledge management", "CI/CD pipelines", "Security & compliance"] },
  { name: "Operations", capabilities: ["Process optimization", "Resource planning", "Data integration", "Risk management", "Vendor management", "Knowledge capture"] },
  { name: "Sales", capabilities: ["Lead qualification", "Deal intelligence", "Meeting support", "Proposal generation", "Account planning", "Sales enablement"] },
  { name: "Product", capabilities: ["Customer insights", "Feature planning", "Market research", "UX optimization", "Documentation", "Launch planning"] },
  { name: "Support", capabilities: ["Query resolution", "Knowledge base management", "Customer intelligence", "Performance analytics", "Self-service solutions", "Proactive support"] },
  { name: "Finance", capabilities: ["Financial planning", "Expense management", "Revenue analysis", "Audit support", "Cash management", "Reporting"] },
  { name: "Marketing", capabilities: ["Content creation", "Campaign analytics", "Audience insights", "Social media management", "Email marketing", "Brand monitoring"] },
];

export const consultingServices: ConsultingService[] = [
  { title: "Full-Stack Consulting", description: "Shipping major new products, refinting complex codebases, custom data pipelines, security reviews, DevOps infrastructure" },
  { title: "Product Management", description: "Operate as independent unit delivering complete products, or integrate into existing teams" },
  { title: "Full-Stack Web Dev", description: "Build, scale, and manage remote teams and sophisticated software systems" },
  { title: "Ops, Data Science & Security", description: "Operations setup, data science initiatives, refactoring, security audits, documentation" },
];

export const projects: Project[] = [
  { name: "Kiwix", description: "Node/Python binding library refactoring and implementation for offline knowledge access", tech: ["Python", "C++", "Cython"], type: "client", impact: "Enables Wikipedia, Project Gutenberg, and TED Talks access without internet" },
  { name: "Oddslingers", description: "Modern online poker platform with new game variants and ad-free gameplay", tech: ["Python", "React", "Move", "Django Channels"], type: "client", impact: "50k+ lines of code; 5+ million hands played across 100+ countries" },
  { name: "Syncroplicity", description: "API-agnostic medical record syncing platform eliminating duplicate data entry between healthcare providers", tech: ["Python", "Django", "JavaScript"], type: "client" },
  { name: "Push Forward Realty", description: "Brooklyn-based realty restructured as agent-run cooperative", tech: ["Django", "React"], type: "client" },
  { name: "Neurodata Without Borders (NWB)", description: "Extended alyx project for primate neuroscience research with data interface and custom visualizations", tech: ["Python", "Jupyter Notebooks", "Apache Superset"], type: "client" },
  { name: "Currents", description: "Music distribution platform emphasizing playlist curation with user-sponsored curator monetization", tech: ["JavaScript", "React"], type: "client" },
  { name: "Redux-Time", description: "Animation library handling 5,000+ animations @ 100FPS", tech: ["JavaScript"], type: "open-source" },
  { name: "OddSlingers", description: "Real-time gaming platform (50k+ LOC)", tech: ["JavaScript"], type: "open-source" },
  { name: "ArchiveBox", description: "Self-hosted internet archive with 30+ contributors", tech: ["Python"], type: "open-source" },
];

export const teamMembers: TeamMember[] = [
  { name: "Max McCrea", role: "Full-Stack Dev / Co-Founder", country: "CA", countryFlag: "🇨🇦", description: "Project management, product management, hiring, system architecture, UX design. Data scientist, ex-pro poker player.", category: "founder" },
  { name: "Nick Sweeting", role: "Full-Stack Dev / Co-Founder", country: "CA", countryFlag: "🇨🇦", description: "Product management, DevOps, distributed systems, UI/UX. Internet archiving enthusiast, transit advocate.", category: "founder" },
  { name: "Ana González", role: "Information Systems Manager / COO", country: "CA", countryFlag: "🇨🇦", description: "Computational linguistics, operations, hiring, problem-solving, strategy", category: "leadership" },
  { name: "Jordan Steiner", role: "Chief Strategy Officer", country: "CA", countryFlag: "🇨🇦", description: "Industry analysis, financial valuation", category: "leadership" },
  { name: "David Cavey", role: "VP Strategy & Operations", country: "CA", countryFlag: "🇨🇦", description: "Architect of operational systems powering growth", category: "leadership" },
  { name: "Juan Diego García", role: "Full-Stack Dev / PM", country: "CO", countryFlag: "🇨🇴", description: "Principal product manager and full-stack engineer", category: "engineering" },
  { name: "Milton Lenis", role: "Full-Stack Dev / PM", country: "CO", countryFlag: "🇨🇴", description: "Engineering manager and full-stack engineer", category: "engineering" },
  { name: "Jose Benitez", role: "UI/UX specialist, product engineer, electronics/drone expertise", country: "CO", countryFlag: "🇨🇴", description: "", category: "engineering" },
  { name: "Juan Diego Caballero", role: "Data scientist, infosecard researcher", country: "CO", countryFlag: "🇨🇴", description: "", category: "engineering" },
  { name: "Juan David Arias", role: "Data analytics, blockchain, machine learning", country: "CO", countryFlag: "🇨🇴", description: "", category: "engineering" },
  { name: "Kevin Guevara", role: "Full-stack developer", country: "CO", countryFlag: "🇨🇴", description: "", category: "engineering" },
  { name: "David Kaufman", role: "Video game developer (Unity/Unreal)", country: "CA", countryFlag: "🇨🇦", description: "", category: "engineering" },
  { name: "Michał Flak", role: "Backend developer, DevOps/infrastructure", country: "PL", countryFlag: "🇵🇱", description: "", category: "engineering" },
  { name: "Kevin Cardona", role: "Full-stack engineer, Python specialist", country: "CO", countryFlag: "🇨🇴", description: "", category: "engineering" },
  { name: "Joyce Obi", role: "Client-server developer, databases, WebSocket", country: "NG", countryFlag: "🇳🇬", description: "", category: "engineering" },
  { name: "Mathieu Virbel", role: "Senior Full-Stack Dev, DevOps, embedded systems, 3/D printing", country: "FR", countryFlag: "🇫🇷", description: "", category: "engineering" },
  { name: "Jonah Ryan-Davis", role: "Senior Full-Stack Dev, electronics background", country: "CA", countryFlag: "🇨🇦", description: "", category: "engineering" },
  { name: "Kan Chen", role: "Unity Game Dev", country: "CA", countryFlag: "🇨🇦", description: "C#, reverse engineering", category: "specialized" },
  { name: "Arman Tavakoli", role: "Machine Learning Engineer", country: "CA", countryFlag: "🇨🇦", description: "Mathematics, mentoring", category: "specialized" },
  { name: "Nikita Lokhmachev", role: "Senior ML Engineer", country: "RU", countryFlag: "🇷🇺", description: "Computer vision, LLMs, Fulbright fellow", category: "specialized" },
  { name: "Tess McCrea", role: "Advisor", country: "CA", countryFlag: "🇨🇦", description: "Operations, scientific research, communication", category: "operations" },
  { name: "Sebastian Gonzalez", role: "Operations & Talent Acquisition", country: "CO", countryFlag: "🇨🇴", description: "Psychology background", category: "operations" },
];

export const coreValues: CoreValue[] = [
  { title: "Level-headedness", description: "Staying calm and analytical under pressure." },
  { title: "Good design", description: "Prioritizing usability and aesthetic excellence." },
  { title: "Pragmatism", description: "Focusing on what actually works and delivers value." },
  { title: "Curiosity", description: "Always learning and seeking better ways to do things." },
  { title: "Total transparency & great communication", description: "Honesty and clarity in every interaction." },
  { title: "Diversity of backgrounds, cultures, and ideas", description: "Embracing different perspectives for better outcomes." },
  { title: "No question lacks merit", description: "Encouraging everyone to speak up and challenge assumptions." },
];

export const officeLocations: OfficeLocation[] = [
  { name: "Montréal" },
  { name: "New York" },
  { name: "San Francisco" },
  { name: "Vancouver" },
  { name: "Medellín" },
  { name: "Cali" },
];

export const companyStatsExtended: CompanyStat[] = [
  { label: "members", value: "22+" },
  { label: "countries", value: "6" },
  { label: "timezones", value: "5+" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "AI Services", href: "#services" },
      { label: "Full-Stack Web Dev", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "Redux-Time", href: "#projects" },
      { label: "ArchiveBox", href: "#projects" },
    ],
  },
];

export const ctaContent = {
  heading: "Ready to transform your organization?",
  subheading: "Book a free consultation to discuss your AI strategy and development needs.",
  primaryCta: { label: "Book a Free Consultation", href: "mailto:hello@monadical.com" },
  secondaryCta: { label: "View Our Projects", href: "#projects" },
};
