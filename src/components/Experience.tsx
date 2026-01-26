'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    title: 'Data Analyst',
    company: 'Bank of Baku',
    period: 'Oct 2025 - Present',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Building automated data pipelines and ETL processes for product analytics',
      'Developing Python scripts for data processing, analysis, and report automation',
      'Engineering SQL-based analytical solutions for strategic goal monitoring',
      'Implementing automated reporting systems to replace manual processes',
      'Building predictive models for market trend analysis and business forecasting',
      'Architecting data workflows and optimizing query performance for large datasets'
    ]
  },
  {
    title: 'Fraud Analyst',
    company: 'Kapital Bank',
    period: 'Feb 2023 - Sep 2025',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Developed ML-based fraud detection models using Python, scikit-learn, and TensorFlow',
      'Built and deployed behavioral scoring models for real-time fraud risk assessment',
      'Engineered feature pipelines for fraud pattern recognition and anomaly detection',
      'Implemented automated fraud monitoring systems with configurable rule engines',
      'Designed and optimized SQL queries for fraud investigation workflows',
      'Built dashboards and alerting systems for fraud trend monitoring',
      'Collaborated with engineering teams to integrate ML models into production systems',
      'Developed training materials and technical documentation for fraud detection systems'
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
      'Built complex SQL queries and stored procedures for data extraction and transformation',
      'Developed Python automation scripts for data processing and ETL workflows',
      'Engineered interactive dashboards using BI tools for real-time metrics tracking',
      'Implemented data validation pipelines for loan performance analysis',
      'Built automated reporting systems that reduced manual effort by 60%'
    ]
  },
  {
    title: 'Credit Analyst',
    company: 'Unibank',
    period: 'Sep 2019 - Dec 2021',
    location: 'Baku, Azerbaijan',
    jobType: 'Full Time',
    workMode: 'Onsite',
    responsibilities: [
      'Developed risk assessment models for consumer loan evaluation',
      'Built SQL-based credit scoring queries and automated decision workflows',
      'Implemented pattern recognition logic for fraud detection in loan applications',
      'Collaborated with engineering teams on credit decision automation systems',
      'Designed data validation rules for application verification processes'
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
    if (companyName.toLowerCase().includes('bank of baku')) return '/logo/bob.png'
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