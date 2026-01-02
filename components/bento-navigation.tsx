'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function BentoNavigation() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none"
        >
            <Link
                href="/"
                className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back
            </Link>
        </motion.nav>
    )
}
