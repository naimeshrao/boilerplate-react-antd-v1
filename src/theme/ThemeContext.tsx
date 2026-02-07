/* eslint-env browser */
import React, { createContext, useState, useEffect } from 'react'
import { ConfigProvider } from 'antd'
import { getAntdTheme } from './antdTokens'
import { ThemeMode, colorVariables } from './colors'

interface ThemeContextProps {
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  toggleTheme: () => {},
  setTheme: () => {}
})

// Apply CSS variables for colors
const applyCssVariables = (mode: ThemeMode) => {
  const root = document.documentElement
  Object.entries(colorVariables[mode]).forEach(([key, value]) => {
    root.style.setProperty(`--${key}-rgb`, value)
    root.style.setProperty(`--${key}`, `rgb(${value})`)
  })
  root.setAttribute('data-theme', mode)
}

// Safely get initial theme from localStorage
const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return (localStorage.getItem('theme') as ThemeMode) || 'light'
  }
  return 'light'
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    applyCssVariables(mode)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', mode)
    }
  }, [mode])

  const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme: setMode }}>
      <ConfigProvider theme={getAntdTheme(mode)}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  )
}
