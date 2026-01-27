'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link as ScrollLink } from 'react-scroll'
import { Code2, Cpu, Database, AlertCircle, ArrowRight } from 'lucide-react'

export function EngineerHero() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.fromTo('.hero-fade',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
            )
                .fromTo('.hero-img',
                    { scale: 0.95, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1 },
                    '-=0.6'
                )
                .fromTo('.hero-badge',
                    { x: -20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                    '-=0.8'
                )

        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="home"
            className="min-h-screen w-full bg-[#fcfbf9] text-neutral-900 flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden"
        >
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-start z-10">

                    {/* System Badge */}
                    <div className="hero-fade mb-8 inline-flex items-center gap-2 px-3 py-1.5 border border-neutral-200 rounded-md bg-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] md:text-xs font-mono text-neutral-500 tracking-wider uppercase">
                            SYSTEM ONLINE • V2.6
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-fade text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8">
                        <span className="block text-black">Critical</span>
                        <span className="block text-neutral-400">Software Engineer</span>
                    </h1>

                    {/* Subtext */}
                    <p className="hero-fade text-lg md:text-xl text-neutral-600 leading-relaxed max-w-lg mb-10">
                        I build critical, pixel-perfect digital solutions for clients worldwide.
                        Merging technical precision with creative strategy to deliver scalable product ecosystems.
                    </p>

                    {/* Tech Stack Grid */}
                    <div className="hero-fade grid grid-cols-2 gap-x-8 gap-y-4 mb-12 w-full max-w-md">
                        <div className="flex items-center gap-2 group">
                            <Code2 className="w-4 h-4 text-blue-600" />
                            <span className="text-xs md:text-sm font-mono text-neutral-600 group-hover:text-black transition-colors">Full-Stack Development</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <Cpu className="w-4 h-4 text-purple-600" />
                            <span className="text-xs md:text-sm font-mono text-neutral-600 group-hover:text-black transition-colors">System Architecture</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <Database className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs md:text-sm font-mono text-neutral-600 group-hover:text-black transition-colors">Data Optimization</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <AlertCircle className="w-4 h-4 text-neutral-600" />
                            <span className="text-xs md:text-sm font-mono text-neutral-600 group-hover:text-black transition-colors">Critical Thinking</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="hero-fade flex flex-wrap gap-6 items-center">
                        <ScrollLink
                            to="portfolio"
                            smooth={true}
                            duration={800}
                            className="cursor-pointer flex items-center gap-2 text-sm font-bold text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                        >
                            Explore Work
                            <ArrowRight className="w-4 h-4" />
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={800}
                            className="cursor-pointer text-sm font-medium text-neutral-500 hover:text-black transition-colors"
                        >
                            Initiate Contact
                        </ScrollLink>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center md:justify-end hero-img">
                    <div className="relative w-full max-w-md aspect-[4/5]">

                        {/* Frame Corners */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-neutral-300" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-neutral-300" />

                        {/* Image Container */}
                        <div className="relative w-full h-full overflow-hidden bg-neutral-100 shadow-2xl shadow-neutral-200/50">
                            <img
                                src="/updated.png"
                                alt="Prashlesh Pratap Singh"
                                className="w-full h-full object-cover grayscale contrast-110"
                            />
                        </div>

                        {/* Floating Tech Badges */}
                        <div className="hero-badge absolute top-8 -right-8 bg-white border border-neutral-100 shadow-lg px-3 py-1.5 flex items-center gap-2 z-20">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span className="text-[10px] font-mono text-neutral-600">{'<Critical />'}</span>
                        </div>

                        <div className="hero-badge absolute bottom-12 -right-4 bg-white border border-neutral-100 shadow-lg px-3 py-1.5 flex items-center gap-2 z-20">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            <span className="text-[10px] font-mono text-neutral-600">isOnline = true</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
