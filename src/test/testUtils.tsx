// This file provides helper functions to render components with necessary providers
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { store } from '@/store'
import i18n from '@/i18n/i18n'
import { lightTheme } from '@/theme'

// Custom render function that wraps components with all required providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>{children}</BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
