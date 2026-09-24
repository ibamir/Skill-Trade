// 'use client'

// import * as React from 'react'
// import { ThemeProvider as NextThemesProvider } from 'next-themes'

// export function ThemeProvider({
//     children,
//     ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//     return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    // Tricks React into safely handling the theme-flicker script payload
    const scriptProps =
        typeof window === 'undefined'
            ? undefined
            : ({ type: 'application/json' } as const)

    return (
        <NextThemesProvider {...props} scriptProps={scriptProps}>
            {children}
        </NextThemesProvider>
    )
}
