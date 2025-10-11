'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    title: 'Backend Developer',
    company: 'Codeavors',
    period: 'Oct 2025 - Present',
    location: 'London, England',
    jobType: 'Part Time',
    workMode: 'Remote',
    responsibilities: [
      'Developing backend data services in Python for a tech-driven travel platform using asynchronous programming',
      'Building and maintaining cloud backend stack with FastAPI, MongoDB, and Redis in containerized Google Cloud environment',
      'Implementing data fetching, scraping, and analysis systems for multi-modal multi-destination travel bookings',
      'Writing comprehensive tests using pytest and ensuring code quality through GitLab CI/CD pipelines',
      'Collaborating on breaking down complex tasks and delivering functional code that passes automated testing'
    ]
  },
  {
    title: 'SQL Developer',
    company: 'Kapital Bank',
    period: 'Feb 2023 - Sep 2025',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Writing complex SQL queries for improving fraud detection systems',
      'Optimizing existing scripts and database performance',
      'Developing stored procedures and database optimization solutions',
      'Implementing data extraction and transformation processes for financial analytics',
      'Collaborating with teams to maintain and enhance SQL-based systems'
    ]
  },
  {
    title: 'Business Analyst',
    company: 'Unibank',
    period: 'Dec 2021 - Feb 2023',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Extracted and analyzed data using SQL and other analytical tools to derive business insights',
      'Manipulated and processed data with Python for comprehensive analysis and reporting',
      'Analyzed consumer loan performance and cashback program effectiveness',
      'Created reports and dashboards to track key business metrics and customer behavior',
      'Collaborated with stakeholders to identify trends and extract business value from data'
    ]
  },
  {
    title: 'Verificator',
    company: 'Unibank',
    period: 'Sep 2019 - Dec 2021',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Reviewed consumer loan applications and made approval or rejection decisions',
      'Analyzed customer data through comprehensive financial and loan history review',
      'Evaluated applicant creditworthiness and risk profiles',
      'Verified application information and supporting documentation',
      'Collaborated with fraud prevention teams on application verification and pattern recognition'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">Professional Experience</h2>
          
          <div className="space-y-10 md:space-y-12">
            {experienceData.map((job, index) => (
              <ExperienceItem
                key={index}
                title={job.title}
                company={job.company}
                period={job.period}
                location={job.location}
                jobType={job.jobType}
                workMode={job.workMode}
                responsibilities={job.responsibilities}
                index={index}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  jobType: string
  workMode: string
  responsibilities: string[]
  index: number
}

const ExperienceItem = ({ title, company, period, location, jobType, workMode, responsibilities, index }: ExperienceItemProps) => {
  const getLogoPath = (companyName: string) => {
    if (companyName.toLowerCase().includes('codeavors')) return '/logo/codeavors.jpg'
    if (companyName.toLowerCase().includes('kapital')) return '/logo/birbank.png'
    if (companyName.toLowerCase().includes('unibank')) return '/logo/unibank.jpeg'
    return null
  }

  const logoPath = getLogoPath(company)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, x: 10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group"
    >
      <div className="timeline-date text-indigo-600 font-semibold">{period} • {location} • {jobType} • {workMode}</div>
      <div className="flex items-start gap-4">
        {logoPath && (
          <img 
            src={logoPath} 
            alt={`${company} logo`}
            className="w-16 h-16 object-contain rounded-lg flex-shrink-0 mt-2 bg-white/50 p-2"
          />
        )}
        <div className="flex-1">
          <h3 className="timeline-title group-hover:text-indigo-700 transition-colors">{title}</h3>
          <h4 className="timeline-subtitle text-indigo-600">{company}</h4>
          <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 mt-3">
            {responsibilities.map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="timeline-content text-sm md:text-base group-hover:text-gray-800 transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience