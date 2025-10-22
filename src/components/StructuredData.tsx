// src/components/StructuredData.tsx
export function PersonStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismat Samadov',
    description: 'Data analytics and AI professional delivering value through business intelligence, machine learning, and strategic insights',
    url: 'https://ismat.pro',
    image: 'https://ismat.pro/images/ismat-samadov.jpg',
    jobTitle: 'Leading Analyst',
    worksFor: {
      '@type': 'Organization',
      name: 'Bank of Baku',
      url: 'https://www.bankofbaku.com'
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Azerbaijan State University of Economics',
        url: 'https://unec.edu.az/',
        description: 'MBA in Artificial Intelligence'
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Mingachevir State University',
        url: 'https://mdu.edu.az/',
        description: 'Bachelor in Management of Industry'
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Oracle Database SQL Certified Associate',
        credentialCategory: 'Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Oracle',
          url: 'https://www.oracle.com'
        },
        validFor: 'Lifetime',
        dateCreated: '2022-05'
      }
    ],
    sameAs: [
      'https://github.com/Ismat-Samadov',
      'https://huggingface.co/IsmatS',
      'https://www.kaggle.com/ismetsemedov',
      'https://www.hackerrank.com/profile/IsmatSamadov',
      'https://medium.com/@ismatsamadov',
      'https://leetcode.com/u/ismetsemedov/',
      'https://www.linkedin.com/in/ismat-samadov/'
    ],
    knowsAbout: [
      'Data Analytics',
      'Business Intelligence',
      'Machine Learning',
      'Artificial Intelligence',
      'SQL Optimization',
      'KPI Monitoring',
      'Financial Analytics',
      'Analytical Reports',
      'Strategic Analysis',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Predictive Analytics',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Data Visualization',
      'Tableau',
      'Power BI',
      'Statistical Analysis',
      'Fraud Detection',
      'Time Series Analysis',
      'Feature Engineering',
      'Data Mining',
      'Model Training',
      'Model Deployment',
      'Python',
      'pandas',
      'NumPy',
      'PostgreSQL',
      'Database Design',
      'Data Warehousing',
      'Business Metrics',
      'Dashboard Design',
      'Market Analysis',
      'Basel III',
      'IFRS 9'
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en'
      },
      {
        '@type': 'Language',
        name: 'Azerbaijani',
        alternateName: 'az'
      },
      {
        '@type': 'Language',
        name: 'Russian',
        alternateName: 'ru'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressRegion: 'Baku',
      addressCountry: 'Azerbaijan'
    },
    email: 'mailto:ismetsemedov@gmail.com',
    // Professional achievements
    award: [
      '5+ years of data analytics and business intelligence expertise',
      '50+ analytical reports delivered for strategic decision making',
      '10+ ML models developed and deployed in production',
      'Basel III compliant risk analytics and reporting',
      'Advanced SQL optimization and database performance tuning'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  );
}

// Project structured data component for ML projects
interface ProjectStructuredDataProps {
  title: string;
  description: string;
  url: string;
  repositoryUrl: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  author: string;
  technologies: string[];
  applicationCategory: string;
  accuracy?: string;
}

export function MLProjectStructuredData({
  title,
  description,
  url,
  repositoryUrl,
  imageUrl,
  datePublished,
  dateModified,
  author,
  technologies,
  applicationCategory,
  accuracy
}: ProjectStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: title,
    description: description,
    url: url,
    codeRepository: repositoryUrl,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://ismat.pro'
    },
    programmingLanguage: technologies,
    applicationCategory: applicationCategory,
    keywords: [...technologies, 'Machine Learning', 'AI', 'Production ML', 'Deep Learning'],
    license: 'MIT License',
    operatingSystem: ['Linux', 'macOS', 'Windows'],
    runtimePlatform: 'Python',
    additionalProperty: accuracy ? [
      {
        '@type': 'PropertyValue',
        name: 'Model Accuracy',
        value: accuracy
      }
    ] : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

// Website structured data
export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismat Samadov | Data Analytics & AI Professional',
    alternateName: 'Ismat Samadov Portfolio',
    url: 'https://ismat.pro',
    description: 'Data analytics and AI professional delivering value through business intelligence, machine learning, and strategic insights. Building analytical solutions and intelligent systems for banking and financial sectors.',
    inLanguage: ['en-US', 'az-AZ', 'ru-RU'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ismat.pro/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Person',
      name: 'Ismat Samadov',
      url: 'https://ismat.pro'
    },
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Ismat Samadov'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Data Analytics',
        description: 'Business intelligence and data-driven insights'
      },
      {
        '@type': 'Thing',
        name: 'Machine Learning & AI',
        description: 'Intelligent systems and predictive analytics'
      },
      {
        '@type': 'Thing',
        name: 'Business Intelligence',
        description: 'Strategic insights and KPI monitoring'
      },
      {
        '@type': 'Thing',
        name: 'Database Analytics',
        description: 'SQL optimization and data management'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

// Organization structured data for professional work
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ismat Samadov Analytics & AI Services',
    description: 'Data Analytics, Business Intelligence, and AI/ML Solutions',
    url: 'https://ismat.pro',
    founder: {
      '@type': 'Person',
      name: 'Ismat Samadov',
      url: 'https://ismat.pro'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global'
    },
    serviceType: [
      'Data Analytics',
      'Business Intelligence',
      'Machine Learning Solutions',
      'AI Consulting',
      'Predictive Analytics',
      'KPI Monitoring',
      'Analytical Reporting',
      'Database Analytics',
      'Data Visualization',
      'Strategic Analysis',
      'Financial Analytics',
      'Statistical Modeling'
    ],
    priceRange: 'Consultation Available',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressRegion: 'Baku',
      addressCountry: 'Azerbaijan'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}