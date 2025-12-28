'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: 'Nova Finance',
        category: 'Web Design / Development',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    },
    {
        id: 2,
        title: 'MOMA Expansion',
        category: 'Brand Identity / UI',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Aesop Redesign',
        category: 'E-commerce / UX',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    },
    {
        id: 4,
        title: 'Brutal Form',
        category: 'Portfolio / Interaction',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    },
]

export function PortfolioCarousel() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current
        const progress = progressRef.current
        if (!section || !track) return

        // Calculate the scroll distance needed
        const getScrollDistance = () => {
            return -(track.scrollWidth - window.innerWidth)
        }

        // Create the horizontal scroll animation with GSAP ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${track.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1, // Smooth scrubbing
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    // Update progress bar
                    if (progress) {
                        progress.style.width = `${self.progress * 100}%`
                    }
                },
            },
        })

        // Animate the track horizontally
        tl.to(track, {
            x: getScrollDistance,
            ease: 'none',
        })

        // Handle resize
        const handleResize = () => {
            ScrollTrigger.refresh()
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            tl.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section ref={sectionRef} className="bg-[#fcfbf9] relative overflow-hidden" id="portfolio">
            <div className="flex flex-col bg-[#fcfbf9] w-full min-h-screen justify-center">
                <div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-8 md:pt-12 flex justify-between items-center z-10 pointer-events-none">
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-900">
                        Selected Works
                    </h2>
                    <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">
                        2023 — 2024
                    </span>
                </div>

                <div
                    ref={trackRef}
                    className="flex items-center gap-6 md:gap-12 pl-6 md:pl-12 w-max will-change-transform"
                >
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`group relative w-[85vw] md:w-[40vw] shrink-0 cursor-pointer ${index === projects.length - 1 ? 'pr-6 md:pr-12' : ''}`}
                        >
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-neutral-200 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 mt-2">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all">
                                    <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="absolute bottom-8 left-6 md:left-12 w-48 h-px bg-neutral-200 overflow-hidden">
                    <div ref={progressRef} className="h-full bg-neutral-900 w-0" />
                </div>
            </div>
        </section>
    )
}
