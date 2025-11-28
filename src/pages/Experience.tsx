import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Users,
  Cpu,
  BarChart3
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.experience-card').forEach((card: any, index: number) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          ease: 'power3.out'
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    {
      company: 'ParallelScore Inc.',
      position: 'Data Software Engineer (Data Insights and Analytics)',
      location: 'Lagos, Nigeria',
      duration: 'May 2022 – Present',
      type: 'Full-time',
      achievements: [
        {
          icon: Cpu,
          text: 'Built enterprise-grade real-time data processing infrastructure using Apache Kafka, Spark, handling 300K+ daily events with sub-second latency'
        },
        {
          icon: BarChart3,
          text: 'Designed and implemented comprehensive data governance framework reducing data inconsistencies by 30% and ensuring 99.9% pipeline reliability'
        },
        {
          icon: TrendingUp,
          text: 'Architected scalable API integrations and data platform solutions supporting 10x data volume growth'
        },
        {
          icon: CheckCircle,
          text: 'Led performance optimization initiatives for Spark jobs and Hive queries, improving processing efficiency by 40%'
        },
        {
          icon: Users,
          text: 'Spearheaded cross-functional technical leadership of a distributed engineering team, mentoring on PySpark, Apache Kafka, and Kubernetes'
        }
      ],
      technologies: ['Apache Kafka', 'Spark', 'Kubernetes', 'PySpark', 'Hive', 'Python', 'AWS']
    },
    {
      company: 'Octave Analytics & Insights Limited',
      position: 'Data Engineer',
      location: 'Lagos, Nigeria',
      duration: 'Jul 2020 – May 2022',
      type: 'Full-time',
      achievements: [
        {
          icon: BarChart3,
          text: 'Managed large-scale data migrations and system optimization for high-volume transactional systems processing 500K+ daily records'
        },
        {
          icon: TrendingUp,
          text: 'Optimized Apache Spark batch processing jobs on Hadoop clusters, reducing compute costs by 25%'
        },
        {
          icon: CheckCircle,
          text: 'Implemented robust troubleshooting and monitoring systems for data pipelines ensuring consistent operation'
        },
        {
          icon: Users,
          text: 'Led cross-functional collaboration initiatives with business and product teams for aligned solutions'
        }
      ],
      technologies: ['Apache Spark', 'Hadoop', 'Python', 'SQL', 'ETL', 'Data Warehousing']
    }
  ]

  const metrics = [
    { value: '300K+', label: 'Daily Events Processed', icon: BarChart3 },
    { value: '40%', label: 'Performance Improvement', icon: TrendingUp },
    { value: '99.9%', label: 'Pipeline Reliability', icon: CheckCircle },
    { value: '10x', label: 'Data Volume Growth', icon: Cpu }
  ]

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building scalable data infrastructure and leading technical teams to deliver
            business-critical data solutions.
          </p>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
            >
              <metric.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold gradient-text">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`experience-card relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 z-10"
                whileHover={{ scale: 2 }}
                transition={{ type: 'spring' }}
              />

              {/* Card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <achievement.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05, type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-6 opacity-90">
            Looking for a data engineer who can deliver scalable solutions and lead technical teams?
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}

export default Experience