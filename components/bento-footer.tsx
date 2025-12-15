'use client'

import Link from 'next/link'
import { socials } from '@/lib/data'

export function BentoFooter() {
    return (
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center py-8 text-sm text-neutral-600 border-t border-neutral-900">
            <div>
                © 2025 Prashlesh Pratap Singh
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                </a>
                <a href={`mailto:${socials.email}`} className="hover:text-white transition-colors">
                    Email
                </a>
            </div>
        </footer>
    )
}
