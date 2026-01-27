'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        // Hide default cursor
        document.body.style.cursor = 'none'

        const moveCursor = (e: MouseEvent) => {
            // Instant tracking for center dot
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            })

            // Smooth delay for follower ring
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.body.style.cursor = 'auto'
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-neutral-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border-[0.5px] border-neutral-900/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    )
}
