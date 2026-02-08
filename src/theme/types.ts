// Central TypeScript definitions for theming

export type ThemeMode = 'light' | 'dark'

export interface AppTheme {
  mode: ThemeMode

  colors: {
    primary: string
    neutral: string
    gray: string
    white: string
    black: string
  }

  spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>
  borderRadius: Record<'sm' | 'md' | 'lg', string>
  shadows: Record<'sm' | 'md' | 'lg', string>
  transitions: Record<'fast' | 'normal' | 'slow', string>
}
