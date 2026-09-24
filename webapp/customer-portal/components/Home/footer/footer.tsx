'use client'

import { links } from '@/components/Home/navbar/header'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Separator } from '@base-ui/react'
import WordmarkFooter from '@/components/ruixen/wordmark-footer'

export default function Footer() {
    return (
        <div className="w-full h-fit px-8 space-y-7 bg-background">
            <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
                <div className="flex flex-col justify-center items-start gap-2">
                    <a className="rounded-md" href="#">
                        <span className="flex items-center justify-center min-w-fit">
                            <h1 className="text-2xl font-bold text-primary">
                                Level up
                            </h1>
                            <p className="text-2xl font-bold text-chart-3">.</p>
                        </span>
                    </a>
                    <p className="text-muted-foreground max-w-70">
                        Tunisia's decentralized talent & micro-skill platform.
                        Powered by D17 & Flouci local settlements.
                    </p>
                </div>
                <div className="flex md:flex-row flex-wrap justify-center items-center gap-4">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <p
                                className='hover:text-primary text-accent-foreground dark:text-accent-foreground hover:font-bold'
                            >
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <Separator className='w-full h-px bg-border'/>
            <p className='text-center'>© 2026 Level Up Inc. All rights reserved.</p>
            <WordmarkFooter brandName='Level Up'/>
        </div>
    )
}