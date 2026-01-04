'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export function CreativeHero() {
    const containerRef = useRef<HTMLElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const floatingItemsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // Initial entrace
            tl.fromTo(imageRef.current,
                { scale: 1.2, opacity: 0, filter: 'blur(10px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out' }
            )
                .fromTo(textRef.current?.children || [],
                    { y: 100, opacity: 0, rotateX: 20 },
                    { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 1 },
                    '-=1.2'
                )
                .fromTo(floatingItemsRef.current?.children || [],
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                    '-=0.8'
                )

            // Mouse parallax effect
            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return
                const { clientX, clientY } = e
                const { innerWidth, innerHeight } = window

                const xPos = (clientX / innerWidth - 0.5)
                const yPos = (clientY / innerHeight - 0.5)

                gsap.to(imageRef.current, {
                    x: xPos * 30,
                    y: yPos * 30,
                    duration: 1,
                    ease: 'power1.out'
                })

                gsap.to(textRef.current, {
                    x: xPos * -40,
                    y: yPos * -40,
                    duration: 1.2,
                    ease: 'power1.out'
                })

                gsap.to(floatingItemsRef.current, {
                    x: xPos * -20,
                    y: yPos * -20,
                    duration: 1.5,
                    ease: 'power1.out'
                })
            }

            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative w-full h-screen overflow-hidden bg-[#fcfbf9] text-neutral-900 flex flex-col justify-center items-center"
        >
            {/* Background Subtle Grain/Gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-transparent to-blue-50/50 mix-blend-multiply" />
                <div className="w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 h-full flex flex-col md:flex-row items-center justify-center">

                {/* Visual Layer (Image) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="relative w-[30vh] md:w-[60vh] aspect-[3/4] md:aspect-square">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neutral-200 to-transparent blur-3xl opacity-60 scale-90 top-1/4" />
                        <img
                            ref={imageRef}
                            src="/updated.png"
                            alt="Prashlesh Pratap Singh"
                            className="w-full h-full object-contain object-bottom drop-shadow-2xl grayscale contrast-110"
                        />
                    </div>
                </div>

                {/* Typography Layer */}
                <div ref={textRef} className="w-full h-full flex flex-col justify-center items-center z-10 mix-blend-difference text-white md:mix-blend-normal md:text-neutral-900">
                    <h1 className="giant-text font-bold tracking-tighter text-center leading-[0.85] select-none">
                        <span className="block md:inline-block">COMPUTER</span>
                        <span className="block md:inline-block md:ml-8 text-outline md:text-neutral-900">SCIENCE</span>
                    </h1>
                    <h1 className="giant-text font-bold tracking-tighter text-center leading-[0.85] select-none">
                        <span className="block md:inline-block font-serif italic font-light tracking-normal lowercase text-[6vw] md:text-[5rem] -mt-2 md:-mt-8 mb-2 md:mb-0 mr-4">creative</span>
                        <span className="block md:inline-block">ENGINEER</span>
                    </h1>
                </div>

                {/* Floating Info / Navigation */}
                <div ref={floatingItemsRef} className="absolute inset-0 pointer-events-none z-20">
                    {/* Top Left: Name */}
                    <div className="absolute top-8 left-6 md:top-12 md:left-12 pointer-events-auto">
                        <span className="block text-xs font-mono text-neutral-500 mb-1 tracking-widest uppercase">Portfolio 2026</span>
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-none">
                            Prashlesh<br />Pratap Singh
                        </h2>
                    </div>

                    {/* Bottom Left: Role Description */}
                    <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-[200px] md:max-w-xs pointer-events-auto hidden md:block">
                        <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                            Crafting digital experiences at the intersection of design, performance, and interaction.
                        </p>
                    </div>

                    {/* Bottom Right: Navigation */}
                    <nav className="absolute bottom-8 right-6 md:bottom-12 md:right-12 flex flex-col text-right gap-1 pointer-events-auto">
                        <span className="text-xs font-mono text-neutral-400 mb-2 tracking-widest uppercase">Menu</span>
                        {['Home', 'Me', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                className="text-lg md:text-xl font-medium text-neutral-900 hover:text-neutral-500 transition-colors tracking-tight"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <ArrowDown className="w-5 h-5 text-neutral-400" />
            </div>

            <style jsx>{`
                .text-outline {
                    -webkit-text-stroke: 1px currentColor;
                    color: transparent;
                }
                @media (min-width: 768px) {
                     .text-outline {
                        -webkit-text-stroke: 1px #171717; /* neutral-900 */
                        color: transparent; 
                    }
                }
            `}</style>
        </section>
    )
}
