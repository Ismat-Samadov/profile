// src/components/StructuredData.tsx
export function PersonStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismat Samadov',
    description: 'ML Engineer and Full Stack Developer building production AI systems, from fraud detection models to end-to-end web applications using Python, TensorFlow, FastAPI, and Next.js',
    url: 'https://ismat.pro',
    image: 'https://ismat.pro/images/ismat-samadov.jpg',
    jobTitle: 'ML Engineer',
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
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Full Stack Development',
      'Python',
      'FastAPI',
      'Next.js',
      'React',
      'TypeScript',
      'REST APIs',
      'Natural Language Processing',
      'Computer Vision',
      'LLM Integration',
      'RAG Systems',
      'Model Deployment',
      'MLOps',
      'Docker',
      'CI/CD',
      'Feature Engineering',
      'Model Training',
      'Fraud Detection',
      'Anomaly Detection',
      'Recommendation Systems',
      'PostgreSQL',
      'Database Design',
      'ETL Pipelines',
      'Data Engineering',
      'pandas',
      'NumPy',
      'Git',
      'Linux'
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
      '10+ ML models developed and deployed in production',
      '4 full-stack AI applications shipped to production',
      '5+ years building AI and data engineering solutions',
      'End-to-end ML pipeline development and deployment',
      'Production-grade fraud detection systems'
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
    name: 'Ismat Samadov | ML Engineer & Full Stack Developer',
    alternateName: 'Ismat Samadov Portfolio',
    url: 'https://ismat.pro',
    description: 'ML Engineer and Full Stack Developer building production AI systems. Portfolio showcasing machine learning projects, full-stack applications, and end-to-end ML deployments using Python, TensorFlow, FastAPI, and Next.js.',
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
        name: 'Machine Learning Engineering',
        description: 'Building and deploying production ML systems'
      },
      {
        '@type': 'Thing',
        name: 'Full Stack Development',
        description: 'End-to-end web applications with Python, FastAPI, Next.js, and React'
      },
      {
        '@type': 'Thing',
        name: 'AI Applications',
        description: 'NLP, Computer Vision, LLM integration, and RAG systems'
      },
      {
        '@type': 'Thing',
        name: 'MLOps & Data Engineering',
        description: 'Model deployment, CI/CD, and data pipelines'
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
    name: 'Ismat Samadov ML Engineering & Development',
    description: 'Machine Learning Engineering, Full Stack Development, and AI Solutions',
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
      'Machine Learning Engineering',
      'Full Stack Development',
      'AI Application Development',
      'Model Deployment',
      'MLOps Solutions',
      'API Development',
      'Data Pipeline Engineering',
      'NLP Solutions',
      'Computer Vision',
      'Fraud Detection Systems',
      'Recommendation Systems',
      'LLM Integration'
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