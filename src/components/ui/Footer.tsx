import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/marvellous-akomolafe',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/marvellous-akomolafe',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:akomolafemarvellous@gmail.com',
      label: 'Email'
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '+234-907-9123-478'
    },
    {
      icon: MapPin,
      text: 'Lagos, Nigeria'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marvellous Akomolafe</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Seasoned Data Engineer with 5+ years building scalable data platforms and
              robust ETL pipelines.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Marvellous Akomolafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer