'use client'

import { ArrowUpRight, Github, MapPin, Code2, GraduationCap } from 'lucide-react'

const techStacks = [
    'React', 'Next.js', 'TypeScript', 'Python', 'TailwindCSS', 'Node.js', 'Git', 'Figma'
]

export function BentoGrid() {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {/* GitHub Card */}
                <a
                    href="https://github.com/prashlesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group col-span-1 row-span-2 bg-neutral-900 rounded-2xl p-5 md:p-6 flex flex-col justify-between min-h-[220px] hover:bg-neutral-800 transition-all duration-300"
                >
                    <div className="flex justify-between items-start">
                        <Github className="w-7 h-7 text-white" />
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">GitHub</h4>
                        <p className="text-neutral-500 text-sm">@prashlesh</p>
                    </div>
                </a>

                {/* Tech Stack */}
                <div className="col-span-1 md:col-span-2 bg-white border border-neutral-200 rounded-2xl p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Code2 className="w-4 h-4 text-neutral-400" />
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {techStacks.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 bg-neutral-100 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 flex flex-col justify-between min-h-[100px]">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Based in</p>
                        <p className="text-sm font-medium text-neutral-900">India</p>
                    </div>
                </div>

                {/* Status */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between min-h-[100px]">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider">Available</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Open for</p>
                        <p className="text-sm font-medium text-neutral-900">Internships & Projects</p>
                    </div>
                </div>

                {/* Currently Learning */}
                <div className="col-span-1 bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between min-h-[100px]">
                    <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-neutral-400" />
                        <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Learning</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-600">System Design</span>
                        <span className="px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-600">DSA</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
