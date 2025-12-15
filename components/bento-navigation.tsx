'use client'

import Link from 'next/link'

export function BentoNavigation() {
    return (
        <nav className="fixed top-0 w-full z-50 mix-blend-difference animate-fade-in">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                <Link href="/" className="text-white font-medium tracking-tight text-xl">
                    prashlesh.
                </Link>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/5">
                    <Link
                        href="#work"
                        className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                        Work
                    </Link>
                    <Link
                        href="#about"
                        className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>
        </nav>
    )
}
