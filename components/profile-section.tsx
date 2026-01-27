'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ProfileSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(contentRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="md:py-32 md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="me">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                <div ref={headingRef} className="w-full md:w-1/3">
                    <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                        About Me
                    </span>
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mt-6 leading-[1.15] text-neutral-900">
                        Turning ideas into polished, user-focused web experiences.
                    </h3>
                </div>
                <div ref={contentRef} className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 md:text-lg leading-relaxed text-base text-neutral-600 w-full">
                    <p>
                        I'm a <span className="text-neutral-900 font-medium">Software Engineer & Freelancer</span> passionate about
                        exploring every domain of technology. I don't limit myself to one stack; I build
                        <span className="text-neutral-900 font-medium"> complete, scalable solutions</span> using whatever tools are best for the job.
                    </p>
                    <div className="flex flex-col gap-6">
                        <p>
                            Currently pursuing opportunities to learn, grow, and contribute to
                            meaningful projects that make a difference.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Actively seeking internship opportunities
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
