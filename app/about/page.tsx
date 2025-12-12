'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, Mail, Code2 } from 'lucide-react'
import { timeline, socials } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Computer Science student passionate about Full-Stack Development, Blockchain, and creating impactful digital experiences.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity neon-glow"
        >
          <Download className="h-5 w-5 mr-2" />
          Download Resume
        </a>
      </motion.div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <MapPin className="h-8 w-8 mx-auto mb-3 text-cyan-500" />
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-sm text-muted-foreground">India • IST Timezone</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <Calendar className="h-8 w-8 mx-auto mb-3 text-cyan-500" />
          <h3 className="font-semibold mb-1">Availability</h3>
          <p className="text-sm text-muted-foreground">Open for Internships</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <Mail className="h-8 w-8 mx-auto mb-3 text-cyan-500" />
          <h3 className="font-semibold mb-1">Contact</h3>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm text-cyan-500 hover:underline"
          >
            {socials.email}
          </a>
        </motion.div>
      </div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-xl mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-6">
          <Code2 className="h-6 w-6 text-cyan-500 mr-3" />
          <h2 className="text-2xl font-bold">My Journey</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm Prashlesh Pratap Singh, a Computer Science Engineering student at Woxsen University,
            Hyderabad. My journey in tech started with web development and has evolved into
            exploring blockchain technology and building full-stack applications that solve real problems.
          </p>
          <p>
            Currently, I'm working on AURA - a modern e-commerce clothing store with 3D product
            visualization, and HerbX - a blockchain-based supply chain system using Ethereum smart
            contracts. I'm passionate about creating seamless user experiences backed by robust technology.
          </p>
          <p>
            I participated in Smart India Hackathon 2025 where I built an AI-powered personalized
            study application. I'm also certified in Foundations of User Experience (UX Design),
            which helps me create user-centric products.
          </p>
          <p>
            I'm always eager to learn new technologies and collaborate on exciting projects.
            Whether it's building modern web applications, exploring Web3, or designing intuitive
            interfaces - I'm ready to take on new challenges!
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Timeline</h2>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-cyan-500 font-mono">{item.year}</span>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 bg-cyan-500 rounded-full neon-glow" />
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-cyan-500/30 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
