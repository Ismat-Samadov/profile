'use client'

import { motion } from 'framer-motion'
import DownloadButton from './DownloadButton'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-16 pb-20 flex flex-col justify-center min-h-[100vh] bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Name and title - improved responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-900">
            <span className="text-primary">Ismat</span> Samadov
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-gray-700">
            Machine Learning Engineer & AI Systems Developer
          </p>
          <p className="text-md sm:text-lg font-medium mb-6 text-gray-700">
            Production ML Systems | Computer Vision | NLP | MLOps
          </p>

          {/* Description - improved text size and spacing */}
          <div className="mb-8">
            <p className="text-gray-600 mb-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Building scalable AI systems and production-ready ML pipelines with expertise in computer vision, 
              natural language processing, and end-to-end model deployment across banking and healthcare sectors.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Currently developing enterprise ML solutions at Kapital Bank while creating open-source 
              AI frameworks and contributing to low-resource language processing for Azerbaijani NLP.
            </p>
          </div>

          {/* Buttons - improved for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-block bg-primary text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition-colors text-center"
              aria-label="View my ML projects and systems"
            >
              View ML Projects
            </a>

            <DownloadButton
              filePath="/ISMAT SAMADOV.pdf"
              label="Download CV"
              className="w-full sm:w-auto py-3 px-6"
              variant="secondary"
              documentType="cv"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      ></div>
    </section>
  )
}

export default Hero