import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import {
  Award,
  BookOpen,
  Target,
  Users,
  Briefcase,
  TrendingUp,
  Code,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Server
} from 'lucide-react'

const About = () => {
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    const ctx = gsap.context(() => {
      gsap.from('.skill-bar-fill', {
        width: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [isInView])

  const skills = [
    { name: 'Python', level: 95, category: 'Languages' },
    { name: 'SQL', level: 90, category: 'Languages' },
    { name: 'Apache Spark', level: 85, category: 'Big Data' },
    { name: 'Apache Kafka', level: 80, category: 'Streaming' },
    { name: 'AWS', level: 85, category: 'Cloud' },
    { name: 'Docker & Kubernetes', level: 75, category: 'DevOps' },
    { name: 'Airflow', level: 90, category: 'Orchestration' },
    { name: 'DBT', level: 80, category: 'Transformation' },
  ]

  const competencies = [
    {
      icon: Database,
      title: 'Database Design',
      description: 'Expert in designing scalable database schemas and optimizing query performance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designing and implementing cloud-native data solutions on AWS, Azure, and GCP',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Implementing robust CI/CD pipelines for automated testing and deployment',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Server,
      title: 'System Design',
      description: 'Architecting high-availability data systems with fault tolerance and scalability',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Building RESTful APIs and microservices for data platform integration',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Terminal,
      title: 'Infrastructure as Code',
      description: 'Automating infrastructure deployment using Terraform and CloudFormation',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const education = [
    {
      degree: 'M.Eng. Mechanical Engineering',
      institution: 'Covenant University, Ota',
      year: '2021-2023',
      icon: Award
    },
    {
      degree: 'B.Eng. Mechanical Engineering',
      institution: 'University of Ilorin, Ilorin',
      year: '2013-2018',
      icon: BookOpen
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Tackling complex data challenges with innovative solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams'
    },
    {
      icon: Briefcase,
      title: 'Leadership',
      description: 'Mentoring teams and driving technical excellence'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Staying ahead with latest data engineering trends'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="text-xl leading-relaxed mb-6">
              I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Seasoned Data Engineer</span> with
              over 5 years of experience building scalable, robust data platforms on both on-premise and cloud
              infrastructure. My expertise lies in designing high-throughput ETL pipelines, streaming architectures,
              and data governance frameworks that power ML-driven insights and business intelligence.
            </p>
            <p className="text-lg leading-relaxed">
              I've successfully handled <span className="font-semibold">300K+ daily transactions</span>, achieved{' '}
              <span className="font-semibold">10x data volume growth</span>, and maintained{' '}
              <span className="font-semibold">99.9% pipeline reliability</span> in production environments.
              I'm passionate about transforming raw data into actionable insights that drive business growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="max-w-6xl mx-auto mb-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="skill-bar-fill h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-1 inline-block">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Core Competencies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${competency.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <competency.icon className="w-10 h-10 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{competency.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {competency.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <edu.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Professional Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            >
              <motion.div
                className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About