import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import {
  Cloud,
  Database,
  BarChart,
  Cpu,
  Globe,
  X,
  CheckCircle
} from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [selectedCategory])

  const projects = [
    {
      id: 1,
      title: 'Realtime IoT Data Platform',
      description: 'Enterprise-scale real-time data processing system for Smart City project with millisecond latency',
      longDescription: 'Architected enterprise-scale real-time data processing system for Smart City project, leveraging AWS services, Apache Spark, and Hadoop ecosystem to stream, process, and visualize IoT sensor data with millisecond latency requirements. Implemented automated scaling using Kubernetes to handle traffic spikes.',
      category: 'Real-time Processing',
      technologies: ['Apache Spark', 'AWS', 'Hadoop', 'Kubernetes', 'Python', 'Kafka'],
      features: [
        'Processing 1M+ events per minute',
        'Sub-second latency for critical alerts',
        'Auto-scaling infrastructure',
        'Real-time dashboard visualization'
      ],
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      metrics: {
        'Events/min': '1M+',
        'Latency': '<100ms',
        'Availability': '99.99%'
      }
    },
    {
      id: 2,
      title: 'Global Talents Analytics Platform',
      description: 'Scalable analytics platform automating data collection and analysis of global talent metrics',
      longDescription: 'Led end-to-end system design and development of scalable analytics platform automating data collection, processing, and analysis of global talent metrics across distributed infrastructure. Built near-real-time dashboards supporting critical business decisions for global operations across 20+ countries.',
      category: 'Analytics',
      technologies: ['Apache Airflow', 'Apache Superset', 'PostgreSQL', 'Python', 'Docker'],
      features: [
        'Automated ETL pipelines',
        'Data governance and lineage tracking',
        'Interactive dashboards',
        'Multi-tenant architecture'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      metrics: {
        'Countries': '20+',
        'Data Sources': '15+',
        'Processing Time': '90% reduction'
      }
    },
    {
      id: 3,
      title: 'Enterprise Reporting Solution',
      description: 'Automated data pipeline aggregating data from disparate sources into centralized warehouse',
      longDescription: 'Designed and implemented automated data pipeline architecture aggregating data from disparate sources into centralized warehouse, reducing manual data collection time by 90%. Delivered production-ready solution ahead of schedule using Apache Airflow orchestration.',
      category: 'Data Pipeline',
      technologies: ['Apache Airflow', 'DBT', 'Snowflake', 'Python', 'SQL'],
      features: [
        'Automated data collection',
        'Data quality checks',
        'Scheduled reporting',
        'Error handling and alerting'
      ],
      icon: Database,
      color: 'from-green-500 to-teal-500',
      metrics: {
        'Time Saved': '90%',
        'Data Sources': '10+',
        'Reports/Day': '50+'
      }
    },
    {
      id: 4,
      title: 'U.S. Census Data Analysis Platform',
      description: 'Big data analytics platform processing large-scale U.S. Census Bureau datasets',
      longDescription: 'Developed scalable big data analytics platform using Hadoop, PySpark, HDFS, and Hive to process and analyze large-scale U.S. Census Bureau datasets. Optimized Hive data warehouse performance for complex analytical queries.',
      category: 'Big Data',
      technologies: ['Hadoop', 'PySpark', 'Hive', 'HDFS', 'SQL'],
      features: [
        'Large-scale data processing',
        'Complex analytical queries',
        'Demographic analysis',
        'Performance optimization'
      ],
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      metrics: {
        'Data Size': '100TB+',
        'Query Speed': '5x faster',
        'Insights': '1000+'
      }
    },
    {
      id: 5,
      title: 'CLOAK Infrastructure Automation',
      description: 'Dynamic infrastructure solution for advanced data processing with automated deployment',
      longDescription: 'Developed dynamic infrastructure solution for advanced data processing using Terraform automation, integrating Docker and Kubernetes for reliable environment management. Improved system reliability by 50% through automated deployment and configuration management.',
      category: 'DevOps',
      technologies: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Python'],
      features: [
        'Infrastructure as Code',
        'Automated deployment',
        'Configuration management',
        'Environment consistency'
      ],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      metrics: {
        'Reliability': '+50%',
        'Deploy Time': '75% faster',
        'Environments': '10+'
      }
    }
  ]

  const categories = ['All', 'Real-time Processing', 'Analytics', 'Data Pipeline', 'Big Data', 'DevOps']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing data engineering solutions that drive business impact through
            scalable infrastructure and innovative architectures.
          </p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={cardsRef} className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                      <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-xs text-gray-500">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 text-gray-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${selectedProject.color} bg-opacity-10`}>
                      <selectedProject.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{selectedProject.title}</h2>
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Impact Metrics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{String(value)}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects