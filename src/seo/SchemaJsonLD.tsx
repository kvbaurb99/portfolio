import type {
  Person,
  WebSite,
  WebPage,
  Organization,
  WithContext,
} from "schema-dts";

const baseUrl = "https://urbanskisoftware.pl";

// Person Schema - Main profile information
export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Jakub Urbański",
  givenName: "Jakub",
  familyName: "Urbański",
  jobTitle: "Front-End Developer",
  description:
    "Front-End Developer specjalizujący się w React i Next.js. Tworzę nowoczesne, wydajne aplikacje webowe z optymalizacją Core Web Vitals i technicznym SEO.",
  url: baseUrl,
  email: "urbanskisoftware@gmail.com",
  telephone: "+48793582082",
  image: `${baseUrl}/images/jakub-urbanski.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bielsko-Biała",
    addressCountry: "PL",
  },
  sameAs: [
    "https://github.com/kvbaurb99",
    "https://www.linkedin.com/in/jakub-urbanski-99a2k/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "styled-components",
    "Core Web Vitals",
    "Technical SEO",
    "SSR",
    "ISR",
    "i18n",
    "Headless CMS",
    "REST API",
    "GraphQL",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Take Group",
    url: "https://takegroup.pl",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Freelancer",
  },
};

// WebSite Schema
export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: "Jakub Urbański - Front-End Developer Portfolio",
  description:
    "Portfolio Front-End Developera specjalizującego się w React i Next.js. Nowoczesne aplikacje webowe, optymalizacja wydajności, techniczne SEO.",
  url: baseUrl,
  inLanguage: ["pl-PL", "en"],
  author: {
    "@id": `${baseUrl}/#person`,
  },
  publisher: {
    "@id": `${baseUrl}/#person`,
  },
};

// WebPage Schema for the main portfolio page
export const webPageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/#webpage`,
  name: "Jakub Urbański | Front-End Developer",
  description:
    "Portfolio Front-End Developera specjalizującego się w React i Next.js. Tworzę nowoczesne, responsywne i wydajne aplikacje webowe.",
  url: baseUrl,
  isPartOf: {
    "@id": `${baseUrl}/#website`,
  },
  about: {
    "@id": `${baseUrl}/#person`,
  },
  mainEntity: {
    "@id": `${baseUrl}/#person`,
  },
  inLanguage: "pl-PL",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// Organization Schema for Take Group
export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#takegroup`,
  name: "Take Group",
  url: "https://takegroup.pl",
  employee: {
    "@id": `${baseUrl}/#person`,
  },
};

// Professional Service Schema
export const professionalServiceSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#service`,
  name: "Jakub Urbański - Usługi Front-End Development",
  description:
    "Profesjonalne usługi tworzenia aplikacji webowych w React i Next.js. Optymalizacja Core Web Vitals, techniczne SEO, wielojęzyczność.",
  url: baseUrl,
  provider: {
    "@id": `${baseUrl}/#person`,
  },
  areaServed: {
    "@type": "Country",
    name: "Poland",
  },
  serviceType: [
    "Front-End Development",
    "React Development",
    "Next.js Development",
    "Web Application Development",
    "Technical SEO",
    "Core Web Vitals Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi programistyczne",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tworzenie aplikacji Next.js",
          description: "Budowa wydajnych aplikacji webowych z SSR/ISR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Optymalizacja Core Web Vitals",
          description: "Poprawa wydajności i doświadczenia użytkownika",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Techniczne SEO",
          description:
            "Implementacja danych strukturalnych i optymalizacja indeksowania",
        },
      },
    ],
  },
} as WithContext<Organization>;

// Combined schema for easy injection
export const allSchemas = [
  personSchema,
  websiteSchema,
  webPageSchema,
  professionalServiceSchema,
];

// Component to render all schemas
export default function SchemaJsonLD() {
  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Individual schema components for selective use
export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
