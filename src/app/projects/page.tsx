// src/app/projects/page.tsx
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'

// Generate page metadata
export const metadata: Metadata = generatePageMetadata({
  title: 'Projects Portfolio',
  description: 'Portfolio of full-stack applications and AI projects by Ismat Samadov. Showcasing production-deployed web applications, automation tools, and data platforms built with Next.js, Python, FastAPI, and React.',
  path: '/projects',
});

// Define the project data
const projectsData = [
  {
    id: 'codeplace',
    title: 'CodePlace - Interactive Coding Platform',
    description: 'Interactive coding platform for developers to practice and improve programming skills with real-time feedback and challenges',
    imageUrl: '/projects/codeplace.jpg',
    github: 'https://github.com/Ismat-Samadov/codeplace',
    url: 'https://www.mwp.codes/',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Full Stack']
  },
  {
    id: 'querybank',
    title: 'QueryBank - AI Database Chatbot',
    description: 'An intelligent chatbot that answers questions about your banking database using AI-powered SQL query generation and automatic data visualization',
    imageUrl: '/projects/querybank.jpg',
    github: 'https://github.com/Ismat-Samadov/QueryBank',
    url: 'https://query-bank.vercel.app/',
    tags: ['AI/LLM', 'SQL Generation', 'Python', 'Data Visualization']
  },
  {
    id: 'birjob',
    title: 'BirJob - Job Aggregator Platform',
    description: 'Comprehensive job aggregation platform that collects and displays listings from multiple sources across Azerbaijan job market',
    imageUrl: '/projects/birjob.jpg',
    github: 'https://github.com/Ismat-Samadov/birjob',
    url: 'https://www.birjob.com/',
    tags: ['Python', 'Web Scraping', 'FastAPI', 'Data Pipeline']
  },
  {
    id: 'poster',
    title: 'ReklamYeri - Advertising Marketplace',
    description: 'Advertising marketplace platform connecting businesses with ad space providers for outdoor and digital advertising in Azerbaijan',
    imageUrl: '/projects/poster.jpg',
    github: 'https://github.com/Ismat-Samadov/poster',
    url: 'https://www.reklamyeri.az/',
    tags: ['Next.js', 'React', 'Node.js', 'Marketplace']
  },
  {
    id: 'lead-generator',
    title: 'Lead Generator - Business Contact Tool',
    description: 'Automated lead generation tool for extracting and qualifying business contacts from various online sources',
    imageUrl: '/projects/leadgen.jpg',
    github: 'https://github.com/Ismat-Samadov/lead_generator',
    url: 'https://lead-generator-theta.vercel.app/',
    tags: ['Python', 'Automation', 'Data Extraction', 'Vercel']
  }
];

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Projects Portfolio</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            A showcase of my full-stack applications, covering job platforms, coding tools,
            advertising marketplaces, and automation systems - all deployed to production.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-800 text-white py-2 px-3 rounded-md hover:bg-gray-900 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                    
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary text-white py-2 px-3 rounded-md hover:bg-blue-600 transition-colors text-sm"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, building full-stack applications, or opportunities
              to create impactful software solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-primary text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}