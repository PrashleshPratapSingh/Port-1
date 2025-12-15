'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { BentoNavigation } from '@/components/bento-navigation'

export default function ProjectsPage() {
  return (
    <>
      <BentoNavigation />

      <main className="md:px-12 max-w-[1400px] mr-auto ml-auto pt-40 pr-6 pl-6 pb-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-12 transition-colors animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Work</p>
          <h1 className="md:text-8xl leading-[0.95] text-6xl font-medium text-white tracking-tight">
            Projects
          </h1>
        </motion.section>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => {
            const num = String(index + 1).padStart(2, '0')

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111] rounded-[2rem] p-8 md:p-10 card-hover group"
              >
                {/* Header */}
                <div className="grid lg:grid-cols-4 gap-8 mb-8">
                  <div>
                    <span className="text-4xl font-medium text-neutral-700">{num}</span>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-white/5 backdrop-blur-md border border-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                      {project.title}
                    </h2>
                    <p className="text-lg text-neutral-400 mb-6">
                      {project.tagline}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="grid lg:grid-cols-4 gap-8 mb-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">About</p>
                  <p className="lg:col-span-3 text-neutral-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid lg:grid-cols-4 gap-8 mb-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Metrics</p>
                  <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-2xl font-medium text-white">{metric.value}</p>
                        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="grid lg:grid-cols-4 gap-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Stack</p>
                  <div className="lg:col-span-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </main>
    </>
  )
}
