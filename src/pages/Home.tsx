import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronDown, Code, Database, Cloud, GitBranch } from 'lucide-react'
import AnimatedText from '../components/animations/AnimatedText'
import ParticleBackground from '../components/animations/ParticleBackground'

const Home = () => {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power4.out',
      })

      gsap.from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out',
      })

      gsap.from('.hero-cta', {
        duration: 1,
        scale: 0,
        opacity: 0,
        delay: 1,
        ease: 'back.out(1.7)',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const techStack = [
    { icon: Code, name: 'Python & SQL', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, name: 'Big Data', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, name: 'Cloud Platforms', color: 'from-green-500 to-teal-500' },
    { icon: GitBranch, name: 'ETL Pipelines', color: 'from-orange-500 to-red-500' },
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '300K+', label: 'Daily Events Processed' },
    { value: '10x', label: 'Data Volume Growth' },
    { value: '99.9%', label: 'Pipeline Reliability' },
  ]

  return (
    <div ref={heroRef} className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <span className="text-sm font-medium">Data Engineer | Cloud Architect</span>
            </div>
          </motion.div>

          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text">Marvellous Akomolafe</span>
          </h1>

          <div className="hero-subtitle">
            <AnimatedText
              text="Building Scalable Data Platforms That Power Business Intelligence"
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            />
          </div>

          <motion.div
            className="hero-cta flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover-lift"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors hover-lift"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <tech.icon className="w-8 h-8 mb-2" />
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Data Engineering',
                description: 'Building robust ETL/ELT pipelines with Airflow, Kafka, and real-time processing systems',
                skills: ['Apache Kafka', 'Airflow', 'PySpark', 'DBT']
              },
              {
                title: 'Cloud Architecture',
                description: 'Designing scalable cloud solutions on AWS, Azure, and hybrid infrastructures',
                skills: ['AWS', 'Azure', 'Kubernetes', 'Docker']
              },
              {
                title: 'Big Data',
                description: 'Processing large-scale data with Hadoop ecosystem and modern data warehouses',
                skills: ['Hadoop', 'Spark', 'BigQuery', 'Snowflake']
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's discuss how I can help transform your data infrastructure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors hover-lift"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home