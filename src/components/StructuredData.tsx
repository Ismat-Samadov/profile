// src/components/StructuredData.tsx
export function PersonStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismat Samadov',
    description: 'Backend Developer & Data Analyst specializing in scalable APIs, business intelligence, SQL optimization, and data-driven analytics',
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
      'Backend Development',
      'Data Analytics',
      'Business Intelligence',
      'SQL Optimization',
      'KPI Monitoring',
      'Financial Analytics',
      'Analytical Reports',
      'Deep Learning Systems',
      'Computer Vision',
      'Natural Language Processing',
      'Medical AI',
      'Financial ML',
      'MLOps',
      'Model Deployment',
      'TensorFlow',
      'PyTorch',
      'YOLOv8',
      'Transformers',
      'Named Entity Recognition',
      'Fraud Detection',
      'Real-time Inference',
      'Feature Engineering',
      'Data Pipelines',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'Production ML Systems',
      'AI Infrastructure',
      'Model Optimization',
      'Healthcare AI',
      'Azerbaijani NLP',
      'Low-resource Languages',
      'Enterprise AI Solutions',
      'Regulatory Compliance ML',
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
      'Production ML Systems serving 1M+ daily predictions',
      '93.3% mAP50 accuracy in computer vision models',
      'Sub-100ms latency real-time inference systems',
      'Basel III compliant risk models',
      'Custom NLP solutions for low-resource languages'
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
    name: 'Ismat Samadov | Backend Developer & Data Analyst',
    alternateName: 'Ismat Samadov Portfolio',
    url: 'https://ismat.pro',
    description: 'Backend Developer & Data Analyst specializing in scalable APIs, business intelligence, SQL optimization, and data-driven analytics. Building robust systems and analytical solutions for banking and technology sectors.',
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
        name: 'Backend Development',
        description: 'Scalable API development and system architecture'
      },
      {
        '@type': 'Thing',
        name: 'Data Analytics',
        description: 'Business intelligence, KPI monitoring, and analytical reporting'
      },
      {
        '@type': 'Thing',
        name: 'SQL Development',
        description: 'Database optimization and complex query development'
      },
      {
        '@type': 'Thing',
        name: 'Machine Learning',
        description: 'Production ML systems and AI infrastructure'
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
    name: 'Ismat Samadov Development & Analytics Services',
    description: 'Backend Development, Data Analytics, and Business Intelligence Services',
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
      'Backend Development',
      'Data Analytics',
      'Business Intelligence',
      'SQL Development',
      'Full-Stack Engineering',
      'API Development',
      'Database Optimization',
      'KPI Monitoring',
      'Analytical Reporting',
      'Computer Vision Solutions',
      'NLP Engineering',
      'MLOps Infrastructure',
      'Production ML Deployment'
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