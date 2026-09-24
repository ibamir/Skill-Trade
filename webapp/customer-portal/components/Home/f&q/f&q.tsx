'use client'

import { UsersRoundIcon } from '@/components/ui/users-round'
import { motion, type Variants } from 'framer-motion'
import {
    GraduationCap,
    Users,
    CreditCard,
    WalletCards,
    ShieldCheck,
    Rocket,
    ArrowUpRight,
} from 'lucide-react'
import { InterestForm } from '../form/form'

const faqs = [
    {
        icon: GraduationCap,
        question: 'What exactly is Level Up?',
        answer: "Level Up is Tunisia's peer-to-peer marketplace for sharing knowledge and digital assets. Learn from students and experts, share what you know, and earn from your skills.",
    },
    {
        icon: Users,
        question: 'Who can use Level Up?',
        answer: 'Anyone. Students can find study resources, learners can develop practical digital skills, and creators or top students can turn their knowledge into an income.',
    },
    {
        icon: CreditCard,
        question: 'How do I pay without an international card?',
        answer: 'Level Up is built for Tunisia. Everything is priced in TND, with local payment methods such as D17, Flouci, and Sobflous.',
    },
    {
        icon: WalletCards,
        question: 'Can I really make money on Level Up?',
        answer: 'Yes. Creators and top students can upload their content, set their own prices, and earn when others purchase it. Earnings can be withdrawn to D17 or Flouci.',
    },
    {
        icon: ShieldCheck,
        question: 'How do you protect my content?',
        answer: 'Premium content is protected with secure streaming, restricted copying and printing, and unique watermarks designed to discourage unauthorized sharing.',
    },
    {
        icon: Rocket,
        question: 'When is the official launch?',
        answer: 'Level Up is currently preparing for launch and onboarding its first creators and tutors. Join Beta Early Access to secure your spot and get notified when the platform opens.',
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function FrequentAskedQuestions() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-24" id="f&q">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mb-12 flex flex-col items-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground"
                >
                    F&Q
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-5 text-lg text-muted-foreground"
                >
                    Everything you need to know about learning, sharing, and
                    earning on Level Up.
                </motion.p>
            </motion.div>

            {/* FAQ grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
            >
                {faqs.map((faq) => {
                    const Icon = faq.icon

                    return (
                        <motion.article
                            key={faq.question}
                            variants={itemVariants}
                            className="group"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    y: -2,
                                    scale: 1.04,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 20,
                                }}
                                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border bg-muted/30"
                            >
                                <Icon className="h-5 w-5" strokeWidth={1.7} />
                            </motion.div>

                            {/* Question */}
                            <h3 className="text-base font-medium tracking-tight">
                                {faq.question}
                            </h3>

                            {/* Answer */}
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {faq.answer}
                            </p>
                        </motion.article>
                    )
                })}
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 overflow-hidden rounded-xl border bg-background"
                id="want-to-know-more"
            >
                <div
                    className="flex flex-col items-center px-6 py-8 text-center sm:py-10"
                >
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Want to know more?
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Our team is here to help you get the answers you need.
                    </p>

                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.03,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 20,
                        }}
                        className="mt-5 gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium w-full flex items-center justify-center"
                    >
                        <InterestForm />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
