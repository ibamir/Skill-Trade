'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Portal, PortalBackdrop } from '@/components/ui/portal'
import { links } from '@/components/Home/navbar/header'
import { XIcon, MenuIcon } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="md:hidden">
            <Button
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label="Toggle menu"
                className="md:hidden"
                onClick={() => setOpen(!open)}
                size="icon"
                variant="outline"
            >
                {open ? (
                    <XIcon className="size-4.5" />
                ) : (
                    <MenuIcon className="size-4.5" />
                )}
            </Button>
            {open && (
                <Portal className="top-14" id="mobile-menu">
                    <PortalBackdrop />
                    <div
                        className={cn(
                            'data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in',
                            'size-full p-4',
                        )}
                        data-slot={open ? 'open' : 'closed'}
                    >
                        <div className="grid gap-y-2 mt-4">
                            {links.map((link) => (
                                <Button
                                    className="justify-start"
                                    key={link.label}
                                    variant="ghost"
                                >
                                    <a
                                        href={link.href}
                                        className="text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </Button>
                            ))}
                            <ThemeToggle />
                        </div>
                        <div className="mt-12 flex flex-col gap-2">
                            <Button
                                variant="default"
                                className="min-w-fit h-10 text-accent"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </Portal>
            )}
        </div>
    )
}
