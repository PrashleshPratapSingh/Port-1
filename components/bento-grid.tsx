'use client'

import { ArrowUpRight, User, Github, Layers, Twitter, ArrowRight, Globe, Layers3, Terminal } from 'lucide-react'
import Link from 'next/link'
import { projects, skills, socials, timeline } from '@/lib/data'

// Featured Project Card (Large)
function FeaturedProjectCard() {
    const featuredProject = projects.find(p => p.featured)

    return (
        <Link
            href={featuredProject?.demo || '#'}
            target="_blank"
            className="group md:col-span-2 lg:col-span-2 row-span-2 h-[500px] md:h-[600px] relative bg-[#111] rounded-[2rem] overflow-hidden card-hover animate-fade-in delay-200 cursor-pointer"
        >
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                    <span className="bg-black/20 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-xs font-medium text-white uppercase tracking-wider">
                        {featuredProject?.category || 'Full-Stack'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl text-white font-medium mb-2">{featuredProject?.title || 'Featured Project'}</h3>
                    <p className="text-neutral-400">{featuredProject?.tagline || 'Project description'}</p>
                </div>
            </div>
            {/* Abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#1a1a1a] to-transparent rounded-tl-[3rem] translate-y-12 translate-x-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500 flex items-center justify-center border-t border-l border-white/5">
                <div className="text-neutral-700 font-mono text-xs p-8 w-full">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="space-y-2 opacity-30">
                        <div className="w-3/4 h-2 bg-neutral-600 rounded"></div>
                        <div className="w-1/2 h-2 bg-neutral-600 rounded"></div>
                        <div className="w-2/3 h-2 bg-neutral-600 rounded"></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

// About Card
function AboutCard() {
    return (
        <div id="about" className="md:col-span-1 lg:col-span-1 h-[290px] md:h-auto bg-[#111] rounded-[2rem] p-8 flex flex-col justify-between card-hover animate-fade-in delay-300">
            <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-neutral-800 overflow-hidden relative">
                    <img
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Prashlesh"
                        alt="Avatar"
                        className="w-full h-full object-cover grayscale opacity-80"
                    />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white">
                    <User className="w-3.5 h-3.5" />
                </div>
            </div>
            <div>
                <h4 className="text-white font-medium text-lg mb-1">About Me</h4>
                <p className="text-sm text-neutral-400 leading-snug">
                    Based in India. CSE student at Woxsen University. Passionate about clean code and minimal design.
                </p>
            </div>
        </div>
    )
}

// Tech Stack Card
function TechStackCard() {
    const stackItems = ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Solidity']

    return (
        <div className="md:col-span-1 lg:col-span-1 md:h-auto flex flex-col card-hover animate-fade-in delay-300 h-[290px] rounded-[2rem] p-8 justify-between bg-[#111]">
            <div className="flex justify-between items-start">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-[#111] flex items-center justify-center text-white">
                        <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-[#111] flex items-center justify-center text-white">
                        <Layers3 className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-[#111] flex items-center justify-center text-white">
                        <Terminal className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-white font-medium text-lg mb-2">Stack</h4>
                <ul className="text-sm text-neutral-400 space-y-1">
                    {stackItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Secondary Project Card (GitHub)
function GitHubCard() {
    return (
        <Link
            href={socials.github}
            target="_blank"
            className="md:col-span-1 lg:col-span-1 h-[290px] md:h-[300px] bg-[#111] rounded-[2rem] p-6 relative overflow-hidden card-hover animate-fade-in delay-400 group cursor-pointer"
        >
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-[120px] h-[120px] text-neutral-500" strokeWidth={1} />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-full flex justify-end">
                    <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-medium mb-1">Open Source</h4>
                    <p className="text-xs text-neutral-500">17+ Repositories</p>
                </div>
            </div>
        </Link>
    )
}

// Social Card (Twitter/X)
function SocialCard() {
    return (
        <a
            href="https://twitter.com/prashlesh"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-1 lg:col-span-1 h-[290px] md:h-[300px] bg-[#111] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center card-hover animate-fade-in delay-400 group cursor-pointer relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-black">
                    <Twitter className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-white font-medium">Twitter / X</h4>
                    <p className="text-xs text-neutral-500 mt-1">@prashlesh</p>
                </div>
            </div>
        </a>
    )
}

// Third Project Card (Wide)
function WideProjectCard() {
    const secondProject = projects.filter(p => p.featured)[1]

    return (
        <Link
            href={secondProject?.github || '#'}
            target="_blank"
            className="md:col-span-2 lg:col-span-2 h-[290px] md:h-[300px] bg-[#111] rounded-[2rem] relative overflow-hidden card-hover animate-fade-in delay-500 group cursor-pointer"
        >
            <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end">
                <h3 className="text-2xl text-white font-medium">{secondProject?.title || 'Blockchain Project'}</h3>
                <p className="text-neutral-400 text-sm mt-1">{secondProject?.tagline || 'Decentralized solutions'}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                {/* Decorative Circle Pattern */}
                <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-20">
                    <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                    <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.2" fill="none" />
                </svg>
            </div>
        </Link>
    )
}

// Experience List Card
function ExperienceCard() {
    const experiences = [
        {
            initial: 'W',
            title: 'B.Tech Computer Science Engineering',
            company: 'Woxsen University',
            period: '2024 — Present'
        },
        {
            initial: 'S',
            title: 'Smart India Hackathon Participant',
            company: 'SIH 2025',
            period: '2025'
        }
    ]

    return (
        <div className="md:col-span-2 lg:col-span-4 bg-[#111] rounded-[2rem] p-8 md:p-10 animate-fade-in delay-500">
            <h3 className="text-xl font-medium text-white mb-8">Experience</h3>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white border border-white/5">
                                    <span className="font-bold text-xs">{exp.initial}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{exp.title}</h4>
                                    <p className="text-neutral-500 text-sm">{exp.company}</p>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0">
                                <span className="text-neutral-600 text-sm font-mono">{exp.period}</span>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <div className="h-px w-full bg-neutral-900 mt-8"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

// Contact CTA Card
function ContactCard() {
    return (
        <div id="contact" className="md:col-span-2 lg:col-span-4 bg-[#1a1a1a] rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center justify-center animate-fade-in delay-500 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 relative z-10 tracking-tight">Have an idea?</h2>
            <p className="text-neutral-400 max-w-lg mb-8 relative z-10">
                Available for freelance projects. Let&apos;s create something indistinguishable from magic.
            </p>

            <a
                href={`mailto:${socials.email}`}
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
                Start a project
                <ArrowRight className="w-[18px] h-[18px]" />
            </a>
        </div>
    )
}

// Main Bento Grid Component
export function BentoGrid() {
    return (
        <div id="work" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[auto]">
            <FeaturedProjectCard />
            <AboutCard />
            <TechStackCard />
            <GitHubCard />
            <SocialCard />
            <WideProjectCard />
            <ExperienceCard />
            <ContactCard />
        </div>
    )
}
