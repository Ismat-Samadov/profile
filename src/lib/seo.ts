// src/lib/seo.ts
import type { Metadata } from 'next'

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  alternateLanguages?: Record<string, string>;
  keywords?: string[];
  author?: string;
  datePublished?: string;
  dateModified?: string;
  contentType?: 'BlogPosting' | 'TechArticle' | 'SoftwareSourceCode' | 'WebSite' | 'WebPage';
  section?: string;
  articleTags?: string[];
  isAmp?: boolean;
}

/**
 * Generate comprehensive metadata for a specific page with enhanced SEO attributes
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
  noIndex = false,
  alternateLanguages,
  keywords = [],
  author = 'Ismat Samadov',
  datePublished,
  dateModified,
  contentType = 'WebPage',
  section = 'ML Engineering & AI Development',
  articleTags = [],
  isAmp = false
}: PageSEOProps): Metadata {
  // Base URL for production
  const baseUrl = 'https://ismat.pro';
  
  // Ensure path starts with a slash
  const pagePath = path.startsWith('/') ? path : `/${path}`;
  
  // Full URL for this page
  const url = `${baseUrl}${pagePath}`;
  
  // Merge default and custom keywords
  const defaultKeywords = [
    'Ismat Samadov',
    'ML Engineer',
    'Machine Learning Engineer',
    'AI Developer',
    'Full Stack Developer',
    'Python Developer',
    'Machine Learning',
    'AI',
    'Artificial Intelligence',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'LLM',
    'RAG Systems',
    'Model Deployment',
    'MLOps',
    'Full Stack Development',
    'Next.js',
    'React',
    'FastAPI',
    'REST APIs',
    'TypeScript',
    'Python',
    'SQL',
    'PostgreSQL',
    'Database Design',
    'Data Engineering',
    'ETL Pipelines',
    'Docker',
    'CI/CD',
    'Git',
    'Fraud Detection',
    'Anomaly Detection',
    'Scoring Models',
    'Pattern Recognition',
    'Predictive Analytics',
    'Recommendation Systems',
    'Data Pipelines',
    'Model Training',
    'Feature Engineering',
    'pandas',
    'NumPy',
    'Hugging Face',
    'Kaggle',
    'Azerbaijan',
    'Baku',
    'Software Engineer',
    'AI Solutions',
    'Production ML Systems'
  ];
  
  const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];
  
  // Construct alternates with language versions
  const alternates: Record<string, unknown> = {
    canonical: url,
  };
  
  // Add AMP version if specified
  if (isAmp) {
    alternates.amphtml = `${url}?amp=1`;
  }
  
  // Add language alternates if provided
  if (alternateLanguages) {
    const languages: Record<string, string> = {};
    Object.entries(alternateLanguages).forEach(([lang, langPath]) => {
      languages[lang] = `${baseUrl}${langPath}`;
    });
    alternates.languages = languages;
  }
  
  // Prepare OpenGraph data
  const openGraphData: Record<string, unknown> = {
    title,
    description,
    url,
    siteName: 'Ismat Samadov | ML Engineer & Full Stack Developer',
    locale: 'en_US',
    type: contentType === 'BlogPosting' || contentType === 'TechArticle' ? 'article' : 'website',
    images: [{
      url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
      width: 1200,
      height: 630,
      alt: title,
    }],
  };
  
  // Add article-specific OpenGraph metadata
  if (contentType === 'BlogPosting' || contentType === 'TechArticle') {
    if (datePublished) {
      openGraphData.publishedTime = datePublished;
    }
    
    if (dateModified) {
      openGraphData.modifiedTime = dateModified;
    }
    
    if (articleTags.length > 0) {
      openGraphData.tags = articleTags;
    }
    
    openGraphData.authors = [author];
    openGraphData.section = section;
  }
  
  // Build metadata object
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates,
    openGraph: openGraphData,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
      creator: '@IsmatSamadov',
      site: '@IsmatSamadov',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    keywords: mergedKeywords,
    authors: [{ name: author, url: baseUrl }],
    creator: author,
    publisher: author,
    category: section,
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    other: {
      'format-detection': 'telephone=no',
      'revisit-after': '7 days',
      'msapplication-TileColor': '#0070f3',
      'msapplication-config': '/browserconfig.xml',
      'theme-color': '#0070f3',
    },
  };
}

/**
 * Default metadata for the entire site
 */
export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Ismat Samadov',
    default: 'Ismat Samadov | ML Engineer & Full Stack Developer',
  },
  description: 'ML Engineer and Full Stack Developer building production AI systems. Expertise in TensorFlow, PyTorch, FastAPI, Next.js, and React. Developing fraud detection models, recommendation systems, and deploying end-to-end ML applications. Specialized in Python, deep learning, NLP, and full-stack web development.',
  metadataBase: new URL('https://ismat.pro'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ismat Samadov | ML Engineer & Full Stack Developer',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Ismat Samadov - ML Engineer & Full Stack Developer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
    creator: '@IsmatSamadov',
    site: '@IsmatSamadov',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0070f3',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'Kwls1AEOMQVWmjtUqTsisEAJIhijYEZXBdVQBOjQ9Yk', // Added Google site verification
    yandex: 'yandex-verification-id', 
  },
  alternates: {
    canonical: 'https://ismat.pro',
    types: {
      'application/rss+xml': 'https://ismat.pro/feed.xml',
      'application/atom+xml': 'https://ismat.pro/atom.xml',
    },
    languages: {
      'en-US': 'https://ismat.pro',
      'az-AZ': 'https://ismat.pro/az',
      'ru-RU': 'https://ismat.pro/ru',
    },
  },
  archives: ['https://ismat.pro/archives'],
  assets: ['https://ismat.pro/assets'],
  bookmarks: ['https://ismat.pro/bookmarks'],
  category: 'ML Engineering & AI Development',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  other: {
    'format-detection': 'telephone=no',
    'revisit-after': '7 days',
    'msapplication-TileColor': '#0070f3',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#0070f3',
  },
};