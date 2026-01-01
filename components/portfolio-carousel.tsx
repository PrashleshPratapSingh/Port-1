'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: "E-Commerce\nArchitecture",
        category: "Full Stack",
        description: "Headless commerce engine with AI-driven inventory prediction.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
        year: "2024",
        stack: ["Next.js", "Stripe", "Prisma"]
    },
    {
        id: 2,
        title: "Quantitative\nDashboard",
        category: "FinTech",
        description: "Real-time high-frequency trading visualization interface.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        year: "2023",
        stack: ["React", "D3.js", "WebSockets"]
    },
    {
        id: 3,
        title: "Generative\nIntelligence",
        category: "AI / ML",
        description: "Context-aware conversational agent with long-term memory.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        year: "2023",
        stack: ["OpenAI", "Python", "Redis"]
    },
    {
        id: 4,
        title: "Immersive\nTravel",
        category: "Mobile",
        description: "AR-enabled travel planning with 3D destination previews.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
        year: "2022",
        stack: ["React Native", "Mapbox", "Three.js"]
    }
]

export function PortfolioCarousel() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    useLayoutEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current

        if (!section || !track) return

        const ctx = gsap.context(() => {
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onUpdate: (self) => setScrollProgress(Math.round(self.progress * 100))
                }
            })

            // Image Parallax within cards
            const images = gsap.utils.toArray<HTMLElement>('.parallax-img');
            images.forEach(img => {
                gsap.to(img, {
                    scale: 1.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        containerAnimation: tween,
                        start: "left right",
                        end: "right left",
                        scrub: 1
                    }
                })
            });

        }, section)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-white relative overflow-hidden h-screen" id="portfolio">

            {/* Header / Intro */}
            <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 pointer-events-none flex justify-between items-start mix-blend-difference text-white">
                <div>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Selected Works</h2>
                    <p className="text-xs text-neutral-400 max-w-[200px]">A curation of digital experiences bridging art and engineering.</p>
                </div>
                <div className="text-right hidden md:block">
                    <span className="serif-text italic text-2xl opacity-50">Collection</span>
                    <div className="text-xs font-mono mt-1 opacity-50">Volume 2024</div>
                </div>
            </div>

            {/* Carousel Track */}
            <div ref={trackRef} className="flex h-full items-center pl-[15vw] pr-[15vw] gap-[15vw]">

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative group flex items-center"
                    >
                        {/* Giant Number (Outline) */}
                        <div className="absolute -left-20 top-0 text-[12vw] font-bold text-transparent text-stroke clamp-text pointer-events-none z-10 leading-none select-none transition-all duration-700 opacity-20">
                            0{index + 1}
                        </div>

                        {/* Card Container */}
                        <div className="w-full h-full relative flex flex-col md:flex-row bg-[#f8f8f8] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">

                            {/* Image Half */}
                            <div className="w-full md:w-3/5 h-full overflow-hidden relative">
                                <Link href={`/project/${project.id}`} className="block w-full h-full">
                                    <div className="absolute inset-0 bg-neutral-900/10 z-10 hover:bg-transparent transition-all duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="parallax-img w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                                    />
                                </Link>
                            </div>

                            {/* Info Half */}
                            <div className="w-full md:w-2/5 h-full p-8 md:p-12 flex flex-col justify-between bg-white relative z-20">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-[10px] font-mono uppercase border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[0.9] tracking-tight mb-4 whitespace-pre-line">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-xs">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-neutral-100 pt-6 mt-6">
                                    <Link href={`/project/${project.id}`} className="group/link flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900">
                                        Open project
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                    </Link>
                                    <span className="text-xs font-mono text-neutral-300">{project.year}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                {/* View All */}
                <div className="w-[40vw] h-[70vh] flex-shrink-0 flex items-center justify-center relative">
                    <Link href="/projects" className="group text-center">
                        <div className="w-32 h-32 rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-500 group-hover:scale-110">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <span className="serif-text italic text-4xl block mb-2">The Archives</span>
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">View All Projects</span>
                    </Link>
                </div>

            </div>

            {/* Minimal Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-100">
                <div
                    className="h-full bg-neutral-900 transition-all duration-75 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

        </section>
    )
}
