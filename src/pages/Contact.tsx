import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Clock
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akomolafemarvellous@gmail.com',
      href: 'mailto:akomolafemarvellous@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234-907-9123-478',
      href: 'tel:+2349079123478',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'marvellous-akomolafe',
      href: 'https://linkedin.com/in/marvellous-akomolafe',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'marvellous-akomolafe',
      href: 'https://github.com/marvellous-akomolafe',
      color: 'from-gray-700 to-gray-900'
    }
  ]

  const availability = {
    status: 'Available',
    type: 'Full-time opportunities',
    timezone: 'WAT (UTC+1)',
    response: 'Within 24 hours'
  }

  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?', required: true }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a data engineering challenge? Looking to build scalable data infrastructure?
            I'm here to help transform your data into actionable insights.
          </p>
        </motion.div>
      </section>

      {/* Availability Status */}
      <section className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="bg-gradient-to-r from-green-500 to-teal-500 p-1 rounded-xl"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute inset-0 animate-ping"></div>
                </div>
                <span className="text-lg font-semibold">{availability.status} for {availability.type}</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {availability.timezone}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Response {availability.response}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <section className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={field.name === 'subject' ? 'md:col-span-2' : ''}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message sent successfully! I'll get back to you soon.
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Something went wrong. Please try again.
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </section>

        {/* Contact Information */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-10`}>
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-4">Download Resume</h3>
              <motion.a
                href="/Marvellous_Akomolafe_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Contact