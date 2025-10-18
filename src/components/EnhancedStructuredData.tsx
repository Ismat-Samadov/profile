// src/components/EnhancedStructuredData.tsx
export function PersonStructuredData() {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ismat Samadov',
      description: 'Technology professional delivering value through software development, data analytics, business intelligence, and intelligent systems',
      url: 'https://ismat.pro',
      image: 'https://ismat.pro/images/ismat-samadov.jpg', // Add a professional photo
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
          url: 'https://unec.edu.az/'
        }
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
        'https://www.linkedin.com/in/ismat-samadov/' // Add LinkedIn
      ],
      knowsAbout: [
        'Software Development',
        'Data Analytics',
        'Business Intelligence',
        'SQL & Databases',
        'KPI Monitoring',
        'Analytical Reporting',
        'Machine Learning',
        'Cloud Infrastructure',
        'API Development',
        'System Architecture',
        'Data Pipelines'
      ],
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
          __html: JSON.stringify(personSchema)
        }}
      />
    );
  }