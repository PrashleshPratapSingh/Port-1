'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

interface RefinedSplitHeroProps {
    onNavigate?: (section: string) => void
}

export function RefinedSplitHero({ onNavigate }: RefinedSplitHeroProps) {
    const heroRef = useRef<HTMLElement>(null)
    const titleLeftRef = useRef<HTMLHeadingElement>(null)
    const titleRightRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLHeadingElement>(null)
    const introRef = useRef<HTMLDivElement>(null)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.fromTo(titleLeftRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            )
                .fromTo(titleRightRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(subtitleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.6'
                )
                .fromTo(introRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.4'
                )
                .fromTo(navRef.current?.children || [],
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                    '-=0.6'
                )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <header ref={heroRef} className="min-h-screen flex flex-col md:flex-row w-full relative" id="home">
            {/* Left Panel (Dark) */}
            <div className="md:w-1/2 md:h-screen overflow-hidden group bg-neutral-950 w-full h-[50vh] relative flex flex-col justify-between p-6 md:p-10">

                {/* Noise Texture Overlay */}


                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/updated.png"
                        alt="Portrait"
                        className="w-full h-full object-contain object-center opacity-60 grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 scale-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Z-Indexed above image */}
                <div className="relative z-20 h-full flex flex-col justify-between">
                    {/* Giant Text Part 1 */}
                    <h1 ref={titleLeftRef} className="giant-text uppercase font-semibold text-white tracking-tighter mix-blend-overlay opacity-90">
                        Computer
                    </h1>

                    {/* Hero Navigation */}
                    <nav ref={navRef} className="flex flex-col gap-3 text-right items-end mt-auto">
                        {['Home', 'Me', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                className="group/link flex items-center gap-2 text-lg md:text-xl font-medium text-white/60 hover:text-white transition-colors duration-300"
                            >
                                <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 transform">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                                {item === 'Me' ? 'About' : item === 'Contact' ? 'Get in Touch' : item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Right Panel (Light) */}
            <div className="md:w-1/2 md:h-screen flex flex-col justify-between bg-[#fcfbf9] w-full h-[50vh] p-6 md:p-10 relative">
                {/* Giant Text Part 2 */}
                <div className="w-full relative pt-6 md:pt-0">
                    <h1 ref={titleRightRef} className="giant-text font-semibold tracking-tighter text-neutral-950 uppercase -ml-1 md:-ml-2">
                        Science
                    </h1>
                    <div className="text-right w-full mt-2 md:mt-4">
                        <h2 ref={subtitleRef} className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-950 uppercase">
                            Creative <span className="text-neutral-400">&</span> Engineer
                        </h2>
                    </div>
                </div>

                {/* Intro Block */}
                <div className="flex-grow flex items-center justify-end md:justify-center">
                    <div ref={introRef} className="max-w-xs md:max-w-sm mr-auto md:mr-0 md:ml-20 relative">
                        {/* Pink Dot decoration - Pulse Animation */}
                        <div className="absolute -left-16 top-2 w-10 h-10 bg-pink-100/50 rounded-full flex items-center justify-center animate-pulse-soft">
                            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                        </div>

                        <p className="text-base font-normal text-neutral-500 leading-relaxed">
                            I'm <span className="text-neutral-900 font-medium">Prashlesh Pratap Singh</span>.
                            Bridging the gap between design and functionality with precision code and creative flair.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden md:flex justify-end animate-bounce">
                    <ArrowDown className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                </div>
            </div>
        </header>
    )
}
