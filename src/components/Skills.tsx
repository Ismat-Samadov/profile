'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaChartBar, FaTools, FaBrain, FaRobot, FaShieldAlt } from 'react-icons/fa'

const skillsData = {
  dataAnalytics: {
    skills: ['SQL', 'Python (pandas, NumPy)', 'Data Visualization', 'Statistical Analysis', 'KPI Monitoring', 'Reporting'],
    color: 'from-blue-500 to-cyan-500'
  },
  businessIntelligence: {
    skills: ['Tableau', 'Power BI', 'Plotly', 'Dashboard Design', 'Business Metrics', 'Strategic Analysis'],
    color: 'from-purple-500 to-indigo-500'
  },
  machineLearning: {
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Deep Learning', 'Model Training', 'Feature Engineering'],
    color: 'from-green-500 to-emerald-500'
  },
  fraudRiskManagement: {
    skills: ['Fraud Detection', 'Risk Assessment', 'Pattern Recognition', 'Behavioral Analysis', 'Scoring Models', 'Investigation'],
    color: 'from-red-500 to-orange-500'
  },
  aiApplications: {
    skills: ['NLP', 'Computer Vision', 'Predictive Analytics', 'Time Series', 'Classification', 'Anomaly Detection'],
    color: 'from-orange-500 to-amber-500'
  },
  databases: {
    skills: ['PostgreSQL', 'SQL Optimization', 'Database Design', 'Query Performance', 'Data Warehousing', 'Data Modeling'],
    color: 'from-teal-500 to-blue-500'
  },
  analyticsTools: {
    skills: ['Jupyter', 'Git', 'Excel', 'Data Mining', 'A/B Testing', 'Market Analysis'],
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
              title="Fraud & Risk Management"
              icon={<FaShieldAlt />}
              skills={skillsData.fraudRiskManagement.skills}
              color={skillsData.fraudRiskManagement.color}
              delay={0}
            />

            <SkillCategory
              title="Data Analytics"
              icon={<FaChartBar />}
              skills={skillsData.dataAnalytics.skills}
              color={skillsData.dataAnalytics.color}
              delay={0.1}
            />

            <SkillCategory
              title="Business Intelligence"
              icon={<FaTools />}
              skills={skillsData.businessIntelligence.skills}
              color={skillsData.businessIntelligence.color}
              delay={0.2}
            />

            <SkillCategory
              title="Machine Learning"
              icon={<FaBrain />}
              skills={skillsData.machineLearning.skills}
              color={skillsData.machineLearning.color}
              delay={0.3}
            />

            <SkillCategory
              title="AI Applications"
              icon={<FaRobot />}
              skills={skillsData.aiApplications.skills}
              color={skillsData.aiApplications.color}
              delay={0.4}
            />

            <SkillCategory
              title="Databases & SQL"
              icon={<FaDatabase />}
              skills={skillsData.databases.skills}
              color={skillsData.databases.color}
              delay={0.5}
            />

            <SkillCategory
              title="Analytics Tools"
              icon={<FaCode />}
              skills={skillsData.analyticsTools.skills}
              color={skillsData.analyticsTools.color}
              delay={0.6}
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
              <div className="text-sm text-blue-100">Years in Data Analytics & BI</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-green-100">Analytical Reports Delivered</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-purple-100">ML Models Developed & Deployed</div>
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