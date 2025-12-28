'use client'

import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Full Stack Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
        year: "2024"
    },
    {
        id: 2,
        title: "Finance Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        year: "2023"
    },
    {
        id: 3,
        title: "AI Chat Application",
        category: "Frontend Engineering",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        year: "2023"
    },
    {
        id: 4,
        title: "Travel App Design",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
        year: "2022"
    }
]

export function PortfolioCarousel() {
    return (
        <section className="py-24 bg-neutral-950 text-white overflow-hidden" id="portfolio">
            <div className="container-lg mb-12 flex items-end justify-between px-6 md:px-12">
                <div>
                    <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                        Selected Works
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 tracking-tight">
                        Featured Projects
                    </h2>
                </div>
                <div className="hidden md:block">
                    <span className="text-sm text-neutral-500">
                        {projects.length} Projects
                    </span>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto no-scrollbar pb-12 pl-6 md:pl-12 pr-6">
                <div className="flex gap-6 w-max">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="w-[85vw] md:w-[600px] group relative flex-shrink-0"
                        >
                            <Link href={`/project/${project.id}`} className="block">
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Floating overlay button */}
                                    <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-neutral-900" />
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-500 mt-2 text-sm">
                                            {project.category}
                                        </p>
                                    </div>
                                    <span className="text-neutral-600 font-mono text-sm border border-neutral-800 px-3 py-1 rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="w-[300px] flex-shrink-0 flex items-center justify-center bg-neutral-900/50 rounded-2xl border border-neutral-800 group hover:bg-neutral-900 transition-colors cursor-pointer ml-6 mr-12">
                        <Link href="/projects" className="flex flex-col items-center gap-4 p-12 text-center">
                            <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white" />
                            </div>
                            <span className="text-lg font-medium text-white">View All Projects</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Progress / Tip (Visible on desktop) */}
            <div className="container-lg px-6 md:px-12 mt-4 hidden md:flex items-center gap-4 opacity-40">
                <div className="h-[1px] bg-white w-24"></div>
                <span className="text-xs uppercase tracking-widest">Scroll or Drag</span>
            </div>
        </section>
    )
}
