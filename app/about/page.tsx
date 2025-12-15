'use client'

import { motion } from 'framer-motion'
import { Download, ArrowUpRight, ArrowLeft } from 'lucide-react'
import { timeline, socials } from '@/lib/data'
import Link from 'next/link'
import { BentoNavigation } from '@/components/bento-navigation'

export default function AboutPage() {
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
          <h1 className="md:text-8xl leading-[0.95] text-6xl font-medium text-white tracking-tight mb-8">
            About Me
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            I'm Prashlesh Pratap Singh, a Computer Science student at Woxsen University
            passionate about building modern web applications and blockchain solutions.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.section>

        {/* Info Grid */}
        <section className="grid md:grid-cols-3 gap-4 mb-20">
          {[
            { label: 'Location', value: 'India', sub: 'IST Timezone' },
            { label: 'Status', value: 'Available', sub: 'Open for internships' },
            { label: 'Education', value: 'B.Tech', sub: 'Computer Science' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] rounded-[2rem] p-8 card-hover"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-4">{item.label}</p>
              <p className="text-3xl font-medium text-white mb-2">{item.value}</p>
              <p className="text-neutral-400">{item.sub}</p>
            </motion.div>
          ))}
        </section>

        {/* Story */}
        <section className="mb-20">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Story</p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-300 leading-relaxed"
            >
              My journey in tech started with curiosity about how websites work.
              Today, I build full-stack applications and explore blockchain technology
              to create solutions that matter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-300 leading-relaxed"
            >
              Currently working on AURA - a modern e-commerce platform, and HerbX -
              a blockchain supply chain system. I participated in Smart India Hackathon
              and I'm certified in UX Design.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Journey</p>
          <h2 className="text-4xl font-medium text-white mb-12">Timeline</h2>

          <div className="border-t border-neutral-800">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-4 gap-6 py-8 border-b border-neutral-800"
              >
                <p className="text-4xl font-medium text-neutral-700">{item.year}</p>
                <div className="md:col-span-3">
                  <p className="text-xl text-white mb-2">{item.title}</p>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111] rounded-[2rem] p-12 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Interested?</p>
          <Link
            href="/contact"
            className="text-4xl md:text-5xl font-medium text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-4"
          >
            Let's Connect <ArrowUpRight className="h-10 w-10" />
          </Link>
        </section>
      </main>
    </>
  )
}
