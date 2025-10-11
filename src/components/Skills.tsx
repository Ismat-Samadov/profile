'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaChartBar, FaTools, FaBrain, FaRobot } from 'react-icons/fa'

const skillsData = {
  backendDevelopment: {
    skills: ['Python', 'FastAPI', 'Django', 'Node.js', 'REST APIs', 'GraphQL'],
    color: 'from-purple-500 to-indigo-500'
  },
  databases: {
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Optimization', 'Database Design', 'Query Performance'],
    color: 'from-blue-500 to-cyan-500'
  },
  cloudInfrastructure: {
    skills: ['Docker', 'Kubernetes', 'Google Cloud', 'AWS', 'CI/CD', 'Microservices'],
    color: 'from-green-500 to-emerald-500'
  },
  dataEngineering: {
    skills: ['ETL Pipelines', 'Data Processing', 'Apache Airflow', 'Data Validation', 'Real-time Processing', 'Data Modeling'],
    color: 'from-orange-500 to-red-500'
  },
  tools: {
    skills: ['Git/GitLab', 'Linux', 'Nginx', 'Pytest', 'Postman', 'Web Scraping'],
    color: 'from-teal-500 to-blue-500'
  },
  frontend: {
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'JavaScript'],
    color: 'from-pink-500 to-rose-500'
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <SkillCategory
              title="Backend Development"
              icon={<FaCode />}
              skills={skillsData.backendDevelopment.skills}
              color={skillsData.backendDevelopment.color}
              delay={0}
            />

            <SkillCategory
              title="Databases"
              icon={<FaDatabase />}
              skills={skillsData.databases.skills}
              color={skillsData.databases.color}
              delay={0.1}
            />

            <SkillCategory
              title="Cloud & Infrastructure"
              icon={<FaTools />}
              skills={skillsData.cloudInfrastructure.skills}
              color={skillsData.cloudInfrastructure.color}
              delay={0.2}
            />

            <SkillCategory
              title="Data Engineering"
              icon={<FaChartBar />}
              skills={skillsData.dataEngineering.skills}
              color={skillsData.dataEngineering.color}
              delay={0.3}
            />

            <SkillCategory
              title="DevOps & Tools"
              icon={<FaBrain />}
              skills={skillsData.tools.skills}
              color={skillsData.tools.color}
              delay={0.4}
            />

            <SkillCategory
              title="Frontend Development"
              icon={<FaRobot />}
              skills={skillsData.frontend.skills}
              color={skillsData.frontend.color}
              delay={0.5}
            />
          </div>

          {/* Technical Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-blue-100">Years in Backend & Data Development</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">100k+</div>
              <div className="text-sm text-green-100">Daily API Requests Handled</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">&lt;50ms</div>
              <div className="text-sm text-purple-100">Average API Response Time</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
  delay: number
}

const SkillCategory = ({ title, icon, skills, color, delay }: SkillCategoryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-200/50 group"
    >
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
        <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent mr-2 text-xl`}>{icon}</span>
        <span className="group-hover:text-gray-800 transition-colors">{title}</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white font-medium text-xs md:text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills