'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export function MinimalHero() {
    const containerRef = useRef<HTMLElement>(null)
    const textWrapperRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const availRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // 1. Availability Pill
            tl.fromTo(availRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )

                // 2. Main Typography Stagger
                .fromTo(textWrapperRef.current?.children || [],
                    { y: 100, opacity: 0, rotateX: 10 },
                    { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.2, ease: 'expo.out' },
                    '-=0.4'
                )

                // 3. Image Reveal (Soft Fade & Scale)
                .fromTo(imageRef.current,
                    { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
                    { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' },
                    '-=1.0'
                )

            // Parallax on Scroll
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen w-full bg-[#fcfbf9] text-neutral-900 flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden"
        >
            {/* Top Bar: Availability */}
            <div ref={availRef} className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200 z-20">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-600">Available for new projects</span>
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

                {/* Typography Column */}
                <div ref={textWrapperRef} className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1 relative z-20">
                    <span className="block text-xl md:text-2xl font-medium text-neutral-500 mb-2 md:mb-4">Building</span>

                    <h1 className="text-[14vw] md:text-[9rem] leading-[0.85] font-black tracking-tighter text-neutral-900 mb-2 md:mb-4">
                        SOFTWARE
                    </h1>

                    <h1 className="text-[10vw] md:text-[6rem] leading-[0.9] font-serif italic text-neutral-900 mix-blend-exclusion">
                        Engineer
                    </h1>

                    <p className="mt-8 md:mt-12 text-sm md:text-lg text-neutral-600 max-w-md mx-auto md:mx-0 leading-relaxed font-light">
                        I am <strong className="text-neutral-900 font-medium">Prashlesh Pratap Singh</strong>.
                        A Software Engineer & Freelancer who loves exploring every domain. I'm not costed towards one thing; I build comprehensive solutions.
                    </p>

                    <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 items-center md:items-start justify-center md:justify-start">
                        <Link href="#portfolio" className="group relative inline-flex items-center gap-2 text-neutral-900 font-semibold text-lg hover:text-neutral-500 transition-colors">
                            View Work
                            <ArrowDown className="w-4 h-4 -rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link href="#contact" className="text-neutral-400 text-lg hover:text-neutral-900 transition-colors">
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Image Column */}
                <div className="md:col-span-5 relative order-1 md:order-2 flex justify-center items-center h-[50vh] md:h-auto">
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px]">
                        {/* Abstract background blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

                        <img
                            ref={imageRef}
                            src="/updated.png"
                            alt="Prashlesh"
                            className="w-full h-full object-cover object-center grayscale contrast-110 md:object-contain drop-shadow-2xl rounded-2xl md:rounded-none z-10 relative"
                        />
                    </div>
                </div>

            </div>

            {/* Minimal Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <div className="w-px h-12 bg-neutral-900/50" />
            </div>

        </section>
    )
}
