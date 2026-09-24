'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserIcon } from '@/components/ui/user'
import { GraduationCapIcon } from '@/components/ui/graduation-cap'
import { BriefcaseBusinessIcon } from '@/components/ui/briefcase-business'
import { CheckIcon } from '@/components/ui/check'
import { ArrowRightIcon } from '@/components/ui/arrow-right'
import { ArrowLeftIcon } from '@/components/ui/arrow-left'
import { Button } from '@/components/ui/button'

const questions = [
    {
        id: 'role',
        question: 'What best describes you?',
        options: [
            {
                value: 'student',
                label: 'Student',
                icon: GraduationCapIcon,
            },
            {
                value: 'learner',
                label: 'Someone looking to learn',
                icon: UserIcon,
            },
            {
                value: 'creator',
                label: 'Creator / Knowledge seller',
                icon: BriefcaseBusinessIcon,
            },
        ],
    },
    {
        id: 'interest',
        question: 'What would you use Level Up for?',
        options: [
            {
                value: 'study',
                label: 'Find study resources',
            },
            {
                value: 'skills',
                label: 'Learn practical skills',
            },
            {
                value: 'sell',
                label: 'Share and sell my knowledge',
            },
            {
                value: 'both',
                label: 'Both learning and selling',
            },
        ],
    },
    {
        id: 'content',
        question: 'What would you be most interested in?',
        options: [
            {
                value: 'pdfs',
                label: 'PDFs & study guides',
            },
            {
                value: 'courses',
                label: 'Mini-courses & videos',
            },
            {
                value: 'exams',
                label: 'Solved exams & exercises',
            },
            {
                value: 'skills',
                label: 'Practical skill tutorials',
            },
        ],
    },
    {
        id: 'likelihood',
        question: 'Would you use Level Up if it launched today?',
        options: [
            {
                value: 'definitely',
                label: 'Definitely',
            },
            {
                value: 'probably',
                label: 'Probably',
            },
            {
                value: 'maybe',
                label: 'Maybe, I want to see more',
            },
            {
                value: 'not-sure',
                label: "I'm not sure yet",
            },
        ],
    },
]

export function InterestForm() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)

    const question = questions[currentQuestion]
    const selectedAnswer = answers[question.id]

    const selectAnswer = (value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [question.id]: value,
        }))
    }

    const next = () => {
        if (!selectedAnswer) return

        if (currentQuestion === questions.length - 1) {
            setSubmitted(true)

            // Send `answers` to your backend here.
            console.log('Interest form:', {
                ...answers,
                [question.id]: selectedAnswer,
            })

            return
        }

        setCurrentQuestion((prev) => prev + 1)
    }

    const back = () => {
        if (currentQuestion === 0) return

        setCurrentQuestion((prev) => prev - 1)
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
            >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                    <CheckIcon size={25}/>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                    Thanks for your interest!
                </h3>

                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Your answers help us understand what people want from Level
                    Up. We&apos;ll keep you updated about the launch.
                </p>
            </motion.div>
        )
    }

    return (
        <div className="mx-auto w-full max-w-xl">
            {/* Progress */}
            <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                        Question {currentQuestion + 1} of {questions.length}
                    </span>

                    <span>
                        {Math.round(
                            ((currentQuestion + 1) / questions.length) * 100,
                        )}
                        %
                    </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                        className="h-full bg-foreground"
                        initial={false}
                        animate={{
                            width: `${
                                ((currentQuestion + 1) / questions.length) * 100
                            }%`,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    />
                </div>
            </div>

            {/* Question */}
            <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                }}
            >
                <h2 className="text-2xl font-semibold tracking-tight">
                    {question.question}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                    Choose the option that fits you best.
                </p>

                <div className="mt-6 space-y-3">
                    {question.options.map((option) => {
                        const Icon = 'icon' in option ? option.icon : null

                        const isSelected = selectedAnswer === option.value

                        return (
                            <motion.button
                                key={option.value}
                                type="button"
                                onClick={() => selectAnswer(option.value)}
                                whileTap={{ scale: 0.98 }}
                                className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                                    isSelected
                                        ? 'border-foreground bg-muted'
                                        : 'hover:bg-muted/50'
                                }`}
                            >
                                {Icon && (
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                                        <Icon className="h-4 w-4" size={14} />
                                    </div>
                                )}

                                <span className="flex-1 text-sm font-medium">
                                    {option.label}
                                </span>

                                <div
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                        isSelected
                                            ? 'border-foreground bg-foreground text-background'
                                            : 'border-muted-foreground/30'
                                    }`}
                                >
                                    {isSelected && <CheckIcon size={13} />}
                                </div>
                            </motion.button>
                        )
                    })}
                </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
                <Button
                    onClick={back}
                    disabled={currentQuestion === 0}
                    className="h-10! rounded-xl p-2"
                    variant="secondary"
                >
                    <ArrowLeftIcon size={17} />
                    Back
                </Button>

                <motion.button
                    type="button"
                    onClick={next}
                    disabled={!selectedAnswer}
                    whileTap={{ scale: 0.97 }}
                    className="h-10! bg-primary text-primary-foreground hover:bg-primary/80 rounded-xl flex items-center justify-center gap-2 p-2"
                >
                    {currentQuestion === questions.length - 1
                        ? 'Finish'
                        : 'Continue'}

                    <ArrowRightIcon size={17} />
                </motion.button>
            </div>
        </div>
    )
}
