'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExclamationTriangle } from 'react-icons/fa'

interface FormData {
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address'
      isValid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    try {
      // Send the data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message')
      }
      
      // Clear form and show success
      setFormData({ name: '', email: '', message: '' })
      setSuccessMessage("Your message has been sent successfully! I&apos;ll get back to you soon to discuss ML opportunities.")
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Something went wrong. Please try again later.')
      }
      
      // Fallback message if the API fails
      setSuccessMessage(
        "While there was an issue with our contact system, " +
        "you can reach me directly at ismetsemedov@gmail.com to discuss ML collaboration opportunities."
      )
      setIsSubmitted(true)
      
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">Let&apos;s Build Something Amazing</h2>
          
          <div className="max-w-md mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 md:mb-6">Interested in ML Collaboration?</h3>
              
              <p className="text-gray-700 text-sm sm:text-base mb-6">
                I&apos;m passionate about leveraging machine learning to solve complex real-world problems. 
                Whether you&apos;re looking to implement production ML systems, develop AI solutions, or discuss 
                opportunities in computer vision, NLP, or MLOps, I&apos;d love to connect.
              </p>

              {/* Expertise highlights */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">What I Can Help With:</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>• Production ML system design and deployment</li>
                  <li>• Computer vision and medical imaging AI</li>
                  <li>• NLP and language model development</li>
                  <li>• Financial ML and regulatory compliance</li>
                  <li>• MLOps infrastructure and automation</li>
                  <li>• Custom AI solutions for your domain</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name or organization"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell me about your ML project, business challenge, or collaboration opportunity. What problem are you looking to solve with AI?"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1" size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                </button>
                
                {error && !isSubmitted && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm">
                    {error}
                  </div>
                )}
                
                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-sm">
                    {successMessage}
                  </div>
                )}
              </form>

              {/* Alternative contact methods */}
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Prefer direct contact?</p>
                <p className="mt-1">
                  <a href="mailto:ismetsemedov@gmail.com" className="text-primary hover:underline">
                    ismetsemedov@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact