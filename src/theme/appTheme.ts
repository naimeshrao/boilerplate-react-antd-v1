import { baseTheme } from './styles/base'
import { darkColors, lightColors } from './styles/colors'
import { AppTheme, ThemeMode } from './types'

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: lightColors,
  ...baseTheme
}

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: darkColors,
  ...baseTheme
}

export const getTheme = (mode: ThemeMode): AppTheme =>
  mode === 'light' ? lightTheme : darkTheme

export type { AppTheme, ThemeMode }
