'use client'
import { cn } from '@/lib/utils'
import type React from 'react'
import { DecorIcon } from '@/components/Home/features/decor-icon'
import { ShieldCheckIcon } from 'lucide-react'
import CreditCard from '@/components/ui/credit-card'
import { KeyCircleIcon } from '@/components/ui/key-circle'
import { RocketIcon } from '@/components/ui/rocket'
import { motion, type MotionProps } from 'motion/react'

type FeatureType = {
    title: string
    icon: React.ReactNode
    description: string
}

export default function Features() {
    return (
        <motion.div
            className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-12 px-8 py-12 md:px-8"
            id="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
            }}
        >
            <motion.div
                className="mx-auto max-w-2xl space-y-2 text-center"
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6 },
                    },
                }}
            >
                <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Features
                </span>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Built for Tunisian Reality
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    The complete platform for local skills and instant
                    settlements. You share knowledge, we handle the rest.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {features.map((feature) => (
                    <FeatureCard feature={feature} key={feature.title} />
                ))}
            </motion.div>
        </motion.div>
    )
}

function FeatureCard({
    feature,
    className,
    ...props
}: Omit<React.ComponentProps<'div'>, keyof MotionProps> &
    Pick<React.ComponentProps<'div'>, 'className'> & {
        feature: FeatureType
    }) {
    return (
        <motion.div
            className={cn(
                'relative flex flex-col justify-between gap-6 bg-background px-6 pt-8 pb-6 shadow-xs',
                // Gradient inspired by testimonials
                'dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]',
                className,
            )}
            {...props}
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
        >
            {/* Extended Borders */}
            <div className="absolute -inset-y-4 -left-px w-px bg-border" />
            <div className="absolute -inset-y-4 -right-px w-px bg-border" />
            <div className="absolute -inset-x-4 -top-px h-px bg-border" />
            <div className="absolute -right-4 -bottom-px -left-4 h-px bg-border" />

            {/* Corner Decor */}
            <DecorIcon className="size-3.5" position="top-left" />

            <div
                className={cn(
                    'relative z-10 flex w-fit items-center justify-center rounded-lg border bg-muted/20 p-3',
                    '[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-foreground',
                )}
            >
                {feature.icon}
            </div>

            <div className="relative z-10 space-y-2">
                <h3 className="font-medium text-base text-foreground">
                    {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    )
}

const features: FeatureType[] = [
    {
        title: 'Practical Micro-Skills',
        icon: <RocketIcon />,
        description:
            'Curated workshops and guides built for real market demand. No outdated theory.',
    },
    {
        title: 'Instant Digital Access',
        icon: <KeyCircleIcon />,
        description:
            'Direct unlock of files, cheat sheets, and private cohorts upon completion.',
    },
    {
        title: '100% Local Rails',
        icon: <ShieldCheckIcon />,
        description:
            'Native payment rails via D17 and Flouci. Zero foreign exchange barriers or fees.',
    },
    {
        title: 'Direct Creator Payouts',
        icon: <CreditCard />,
        description:
            'Automated cashouts straight to your postal wallet or bank with transparent 88% revenue share.',
    },
]
