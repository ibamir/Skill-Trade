import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'

const PlusJakartaSans = Plus_Jakarta_Sans({
    variable: '--font-plus-jakarta',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Skill Trade | Learn any skill',
    description:
        'Learn practical skills, share what you know, and discover creators on Skill Trade.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            className={`${PlusJakartaSans.variable}  h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
