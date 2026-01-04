'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown, Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function MagazineHero() {
    const containerRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const imageWrapperRef = useRef<HTMLDivElement>(null)
    const detailsRef = useRef<HTMLDivElement>(null)
    const overlayTextRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

            // 1. Reveal Background Text
            tl.fromTo(titleRef.current,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 0.1, duration: 1.5 }
            )

                // 2. Image Reveal (mask slide)
                .fromTo(imageWrapperRef.current,
                    { clipPath: 'inset(100% 0 0 0)', scale: 1.1 },
                    { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.5, ease: 'expo.inOut' },
                    '-=1.2'
                )

                // 3. Overlay Text & Details
                .fromTo(overlayTextRef.current?.children || [],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
                    '-=0.5'
                )
                .fromTo(detailsRef.current?.children || [],
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, stagger: 0.1, duration: 0.8 },
                    '-=0.8'
                )

            // Parallax on Scroll (simple)
            gsap.to(titleRef.current, {
                yPercent: 50,
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
            className="relative w-full h-screen min-h-[800px] bg-[#fcfbf9] text-neutral-900 overflow-hidden flex flex-col items-center justify-center"
            id="home"
        >
            {/* 1. Background Giant Title (Behind Image) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
                <h1
                    ref={titleRef}
                    className="text-[25vw] font-black tracking-tighter text-neutral-900 leading-none opacity-5 whitespace-nowrap"
                >
                    DESIGNER
                </h1>
            </div>

            {/* 2. Main Visual Composition */}
            <div className="relative z-10 w-full max-w-[1600px] h-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center">

                {/* Left Column: Magazine Details */}
                <div ref={detailsRef} className="absolute left-6 top-6 md:left-12 md:top-12 flex flex-col gap-4 z-30 mix-blend-difference text-[#fcfbf9] md:text-neutral-900 md:mix-blend-normal">
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 animate-spin-slow" />
                        <span className="font-mono text-sm tracking-widest uppercase">Global Edition</span>
                    </div>
                    <div className="h-px w-12 bg-current" />
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">VOL. 01</span>
                        <span className="text-xs opacity-60">2026 Collection</span>
                    </div>
                </div>

                {/* Center Image Wrapper */}
                <div
                    ref={imageWrapperRef}
                    className="relative w-full md:w-auto md:h-[85vh] aspect-[3/4] md:aspect-[0.8] overflow-hidden shadow-2xl md:mx-auto mt-20 md:mt-0"
                >
                    {/* The Image */}
                    <div className="absolute inset-0 bg-[#e5e5e5]">
                        <img
                            src="/updated.png"
                            alt="Cover Star"
                            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                    </div>

                    {/* Inner Frame Border */}
                    <div className="absolute inset-4 border border-white/20 pointer-events-none" />

                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    {/* Content ON TOP of Image */}
                    <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                        <div className="w-full h-px bg-white/40 mb-4" />
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-serif italic text-3xl md:text-4xl mb-1">The Builder</h3>
                                <p className="text-sm font-mono opacity-80 max-w-[200px]">Crafting digital interfaces with code and passion.</p>
                            </div>
                            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Right/Overlay Layer: Title Intersecting */}
                <div ref={overlayTextRef} className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none mix-blend-exclusion text-white">
                    <h2 className="text-[12vw] md:text-[8rem] leading-[0.8] font-bold tracking-tighter uppercase font-display">
                        <span className="block">Prashlesh</span>
                        <span className="block italic font-light font-serif tracking-normal lowercase text-[8vw] md:text-[5rem] my-2">Pratap Singh</span>
                        <span className="block text-outline-white">PORTFOLIO</span>
                    </h2>
                </div>


                {/* Navigation (Magazine Sidebar style) */}
                <nav className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-50 flex md:flex-col gap-6 md:items-end items-center">
                    {['About', 'Work', 'Contact'].map((item, i) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase()}`}
                            className="group flex items-center gap-3 cursor-pointer"
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono -translate-x-2 group-hover:translate-x-0 duration-300 hidden md:block">0{i + 1}</span>
                            <span className="text-sm md:text-lg font-bold uppercase tracking-widest hover:line-through decoration-2 decoration-red-500 transition-all text-neutral-900">{item}</span>
                        </Link>
                    ))}
                </nav>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-6 md:left-12 z-50 flex items-center gap-2 text-neutral-500">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                    <span className="text-xs font-mono uppercase tracking-widest">Scroll to Explore</span>
                </div>

            </div>

            <style jsx>{`
                .text-outline-white {
                    -webkit-text-stroke: 1px white;
                    color: transparent;
                }
                .font-display {
                     font-family: var(--font-display);
                }
            `}</style>
        </section>
    )
}
