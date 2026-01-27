'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, Code, Terminal, Cpu, Database } from 'lucide-react'
import Link from 'next/link'

export function EngineerHero() {
    const containerRef = useRef<HTMLElement>(null)
    const textColRef = useRef<HTMLDivElement>(null)
    const visualColRef = useRef<HTMLDivElement>(null)
    const imageFrameRef = useRef<HTMLDivElement>(null)
    const codeLinesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // 1. Grid/Frame Entrance (Technical Wipe)
            tl.fromTo(visualColRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1 }
            )
                .fromTo(imageFrameRef.current,
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.8, ease: 'expo.inOut' },
                    '-=0.5'
                )

                // 2. Text Content "Typing" reveal (Staggered opacity/y)
                .fromTo(textColRef.current?.querySelectorAll('.reveal-text') || [],
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
                    '-=0.3'
                )

                // 3. Code Lines visual decoration
                .fromTo(codeLinesRef.current?.children || [],
                    { width: 0, opacity: 0 },
                    { width: 'auto', opacity: 1, stagger: 0.1, duration: 0.8, ease: 'steps(10)' },
                    '-=0.5'
                )

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen w-full bg-[#fcfbf9] text-neutral-900 flex items-center justify-center overflow-hidden pt-20 pb-10"
        >
            {/* Tech Grid Background (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 h-full">

                {/* Left Column: The Thesis (Text) */}
                <div ref={textColRef} className="md:col-span-7 flex flex-col items-start gap-6 md:gap-8 order-2 md:order-1">

                    {/* Identification Pill */}
                    <div className="reveal-text flex items-center gap-3 px-3 py-1.5 border border-neutral-300 rounded text-xs font-mono font-medium text-neutral-600 uppercase tracking-widest bg-white">
                        <Terminal className="w-3 h-3 text-neutral-900" />
                        <span>System Online • V2.6</span>
                    </div>

                    {/* Main Headline */}
                    <div className="flex flex-col gap-1">
                        <h1 className="reveal-text text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                            Freelance
                        </h1>
                        <h1 className="reveal-text text-5xl md:text-7xl font-bold tracking-tight text-neutral-400 leading-[1.1]">
                            Software Engineer
                        </h1>
                    </div>

                    {/* Subtext explanation */}
                    <p className="reveal-text text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed border-l-2 border-neutral-200 pl-6">
                        I build critical, pixel-perfect digital solutions for clients worldwide.
                        Merging technical precision with creative strategy to deliver scalable product ecosystems.
                    </p>

                    {/* Stats / Tech Stack Indicators */}
                    <div className="reveal-text grid grid-cols-2 gap-x-12 gap-y-4 font-mono text-sm text-neutral-500 mt-2">
                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            <span>Full-Stack Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-purple-600" />
                            <span>System Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Database className="w-4 h-4 text-green-600" />
                            <span>Data Optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center text-[10px] font-bold">!</span>
                            <span>Critical Thinking</span>
                        </div>
                    </div>

                    {/* CTA Buttons - Tactical Look */}
                    <div className="reveal-text flex gap-4 mt-4">
                        <Link
                            href="#portfolio"
                            className="bg-neutral-900 text-white px-8 py-4 font-medium tracking-wide hover:bg-neutral-800 transition-colors flex items-center gap-2 group"
                        >
                            Explore Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border border-neutral-300 font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                        >
                            Initiate Contact
                        </Link>
                    </div>

                </div>

                {/* Right Column: The Evidence (Visual) */}
                <div ref={visualColRef} className="md:col-span-5 relative order-1 md:order-2 flex justify-center md:block">
                    {/* The Frame Container */}
                    <div className="relative w-full max-w-md aspect-[4/5] mx-auto">

                        {/* Decorative "Scan" Frame */}
                        <div className="absolute -inset-4 border border-neutral-200 pointer-events-none hidden md:block" />
                        <div className="absolute -inset-4 border-l border-t border-neutral-900 w-8 h-8 pointer-events-none hidden md:block" />
                        <div className="absolute -right-4 -bottom-4 border-r border-b border-neutral-900 w-8 h-8 pointer-events-none hidden md:block" />

                        {/* Image Mask / Frame */}
                        <div ref={imageFrameRef} className="w-full h-full relative overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm origin-left group">
                            <img
                                src="/updated.png"
                                alt="Prashlesh - Software Engineer"
                                className="w-full h-full object-cover object-top grayscale contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />

                            {/* Overlay Data Details */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <span className="block font-bold text-neutral-900">PRASHLESH.P.S</span>
                                    <span className="block text-[10px]">FOCUS: SYSTEM</span>
                                </div>
                                <div className="text-right">
                                    <span className="block">STATUS: ONLINE</span>
                                    <span className="block text-[10px]">ID: 489-XB</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating "Code" Decorations */}
                        <div ref={codeLinesRef} className="absolute -right-12 top-12 flex flex-col gap-2 font-mono text-[10px] text-neutral-400 pointer-events-none hidden md:flex">
                            <div className="bg-white px-2 py-1 border border-neutral-200 shadow-sm">{'<Engineer />'}</div>
                            <div className="bg-white px-2 py-1 border border-neutral-200 shadow-sm translate-x-4">{'import { Critical }'}</div>
                            <div className="bg-white px-2 py-1 border border-neutral-200 shadow-sm translate-x-2">{'const stack = []'}</div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
