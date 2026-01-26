'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectsData = [
  {
    id: 'ihealth',
    title: 'iHealth',
    description: 'Healthcare analytics platform with ML-powered patient outcome prediction',
    imageUrl: '/projects/ihealth.jpg',
    github: 'https://github.com/Ismat-Samadov/ihealth',
    url: 'https://www.ihealth.ink/',
    tags: ['TensorFlow', 'FastAPI', 'Next.js', 'PostgreSQL']
  },
  {
    id: 'trackio',
    title: 'Trackio',
    description: 'AI project management with automated task prioritization algorithms',
    imageUrl: '/projects/trackio.jpg',
    github: 'https://github.com/Ismat-Samadov/trackio',
    url: 'https://www.trackio.art/',
    tags: ['Python', 'React', 'ML Models', 'REST API']
  },
  {
    id: 'jobry',
    title: 'Jobry',
    description: 'ML-powered job recommendation engine using NLP for skill matching',
    imageUrl: '/projects/jobry.jpg',
    github: 'https://github.com/Ismat-Samadov/jobry',
    url: 'https://www.jobry.io/',
    tags: ['NLP', 'scikit-learn', 'FastAPI', 'React']
  },
  {
    id: 'myfrog',
    title: 'MyFrog',
    description: 'AI financial forecasting system for cash flow and revenue prediction',
    imageUrl: '/projects/myfrog.jpg',
    github: 'https://github.com/Ismat-Samadov/myfrog',
    url: 'https://www.myfrog.me/',
    tags: ['Time Series', 'PyTorch', 'Next.js', 'Docker']
  }
]

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">Production Applications</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
            Full-stack ML applications built and deployed to production
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 group"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
