'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'F&Q', href: '#f&q' },
    { label: 'Want to know more', href: '#want-to-know-more' },
]

export function Header() {
    const scrolled = useScroll(10)

    return (
        <div
            className={cn(
                'sticky top-0 z-50 flex items-center justify-center bg-background mx-auto w-full max-w-6xl md:transition-all md:ease-out',
                {
                    'md:top-2 md:max-w-3xl md:shadow rounded-2xl bg-popover/40 backdrop-blur-md border border-border':
                        scrolled,
                },
            )}
        >
            <div
                className={cn(
                    'flex h-14 w-full items-center justify-between p-8 px-4! md:h-12 md:transition-all md:ease-out',
                    {
                        'md:px-2': scrolled,
                    },
                )}
            >
                <a className="rounded-md" href="#">
                    <span className="flex items-center justify-center min-w-fit">
                        <h1 className="text-2xl font-bold text-primary">
                            Level up
                        </h1>
                        <p className="text-2xl font-bold text-chart-3">.</p>
                    </span>
                </a>
                <div className="hidden items-center justify-between gap-4 flex-2 md:flex">
                    <div className="flex items-center justify-center flex-1 gap-4">
                        {links.map((link) => (
                            <Link key={link.label} href={link.href}>
                                <p
                                    className={cn(
                                        'hover:text-primary text-accent-foreground dark:text-accent-foreground hover:font-bold',
                                    )}
                                >
                                    {link.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                    {/* <Button className="min-w-fit h-10 text-accent dark:text-accent">
                        Get Started
                    </Button> */}
                    <ThemeToggle />
                </div>

                <MobileNav />
            </div>
        </div>
    )
}