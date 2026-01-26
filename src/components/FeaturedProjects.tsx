'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaBriefcase, FaBullhorn, FaUserPlus } from 'react-icons/fa'

const projectsData = [
  {
    id: 'codeplace',
    title: 'CodePlace',
    description: 'Interactive coding platform for developers to practice and improve programming skills',
    icon: <FaCode className="text-4xl" />,
    github: 'https://github.com/Ismat-Samadov/codeplace',
    url: 'https://www.mwp.codes/',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'REST API'],
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'querybank',
    title: 'QueryBank',
    description: 'SQL practice platform with curated query challenges for database skill development',
    icon: <FaDatabase className="text-4xl" />,
    github: 'https://github.com/Ismat-Samadov/QueryBank',
    url: 'https://query-bank.vercel.app/',
    tags: ['React', 'Node.js', 'SQL', 'Vercel'],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'birjob',
    title: 'BirJob',
    description: 'Job aggregation platform collecting listings from multiple sources across Azerbaijan',
    icon: <FaBriefcase className="text-4xl" />,
    github: 'https://github.com/Ismat-Samadov/birjob',
    url: 'https://www.birjob.com/',
    tags: ['Python', 'Web Scraping', 'FastAPI', 'PostgreSQL'],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'poster',
    title: 'ReklamYeri',
    description: 'Advertising marketplace platform connecting businesses with ad space providers',
    icon: <FaBullhorn className="text-4xl" />,
    github: 'https://github.com/Ismat-Samadov/poster',
    url: 'https://www.reklamyeri.az/',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'lead-generator',
    title: 'Lead Generator',
    description: 'Automated lead generation tool for extracting and qualifying business contacts',
    icon: <FaUserPlus className="text-4xl" />,
    github: 'https://github.com/Ismat-Samadov/lead_generator',
    url: 'https://lead-generator-theta.vercel.app/',
    tags: ['Python', 'Automation', 'Data Extraction', 'Vercel'],
    gradient: 'from-pink-500 to-rose-600'
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
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">Production Applications</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
            Full-stack applications built and deployed to production
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 group"
              >
                <div className={`h-32 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white/90 group-hover:text-white transition-colors`}>
                  {project.icon}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

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
                      className="inline-flex items-center gap-2 bg-white/20 text-white py-2 px-3 rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="https://github.com/Ismat-Samadov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              <FaGithub /> View All Projects on GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
