'use client'

export function BentoHero() {
    return (
        <section className="mb-20 animate-fade-in delay-100">
            <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
                <h1 className="md:text-8xl leading-[0.95] text-6xl font-medium text-white tracking-tight max-w-4xl">
                    Full-Stack <br />
                    <span className="text-neutral-500">Developer & Designer.</span>
                </h1>
                <div className="mb-2">
                    <p className="text-lg max-w-xs leading-relaxed text-neutral-400">
                        Building modern web applications and blockchain solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}
