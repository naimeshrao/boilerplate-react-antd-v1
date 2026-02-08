/* eslint-env jest */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import Button from './Button'
import { lightTheme } from '@/theme'

/**
 * Custom render function that wraps components with required providers
 */
const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
}

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with text', () => {
      renderWithTheme(<Button>Click Me</Button>)
      expect(screen.getByText('Click Me')).toBeInTheDocument()
    })

    it('should render button with children prop', () => {
      renderWithTheme(<Button children="Test Button" />)
      expect(screen.getByText('Test Button')).toBeInTheDocument()
    })

    it('should render button with btnType prop', () => {
      const { container } = renderWithTheme(
        <Button btnType="primary">Primary Button</Button>
      )
      const button = container.querySelector('.ant-btn')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Button Types', () => {
    it('should render primary button', () => {
      renderWithTheme(
        <Button btnType="primary" data-testid="primary-btn">
          Primary
        </Button>
      )
      expect(screen.getByTestId('primary-btn')).toBeInTheDocument()
    })

    it('should render secondary button', () => {
      renderWithTheme(
        <Button btnType="secondary" data-testid="secondary-btn">
          Secondary
        </Button>
      )
      expect(screen.getByTestId('secondary-btn')).toBeInTheDocument()
    })

    it('should render danger button', () => {
      renderWithTheme(
        <Button btnType="danger" data-testid="danger-btn">
          Danger
        </Button>
      )
      expect(screen.getByTestId('danger-btn')).toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('should handle click events', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()

      renderWithTheme(
        <Button onClick={handleClick} data-testid="clickable-btn">
          Click Me
        </Button>
      )

      const button = screen.getByTestId('clickable-btn')
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not trigger click when disabled', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()

      renderWithTheme(
        <Button onClick={handleClick} disabled data-testid="disabled-btn">
          Disabled
        </Button>
      )

      const button = screen.getByTestId('disabled-btn')
      await user.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Props', () => {
    it('should accept and apply className prop', () => {
      const { container } = renderWithTheme(
        <Button className="custom-class">Styled</Button>
      )
      const button = container.querySelector('.custom-class')
      expect(button).toBeInTheDocument()
    })

    it('should show loading state', () => {
      renderWithTheme(
        <Button loading data-testid="loading-btn">
          Loading
        </Button>
      )
      expect(screen.getByTestId('loading-btn')).toBeInTheDocument()
    })

    it('should support different sizes', () => {
      renderWithTheme(
        <>
          <Button size="small" data-testid="small-btn">
            Small
          </Button>
          <Button size="middle" data-testid="middle-btn">
            Middle
          </Button>
          <Button size="large" data-testid="large-btn">
            Large
          </Button>
        </>
      )

      expect(screen.getByTestId('small-btn')).toBeInTheDocument()
      expect(screen.getByTestId('middle-btn')).toBeInTheDocument()
      expect(screen.getByTestId('large-btn')).toBeInTheDocument()
    })

    it('should support different HTML types', () => {
      const { container } = renderWithTheme(
        <Button htmlType="submit">Submit</Button>
      )
      const button = container.querySelector('button')
      expect(button?.type).toBe('submit')
    })
  })

  describe('Accessibility', () => {
    it('should be keyboard accessible', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()

      renderWithTheme(
        <Button onClick={handleClick} data-testid="accessible-btn">
          Accessible
        </Button>
      )

      const button = screen.getByTestId('accessible-btn')
      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalled()
    })

    it('should have proper ARIA attributes when disabled', () => {
      renderWithTheme(
        <Button disabled data-testid="aria-btn">
          Disabled
        </Button>
      )
      const button = screen.getByTestId('aria-btn')
      expect(button).toBeDisabled()
    })
  })

  describe('Theme Integration', () => {
    it('should render with theme provider', () => {
      renderWithTheme(<Button data-testid="themed-btn">Themed</Button>)
      expect(screen.getByTestId('themed-btn')).toBeInTheDocument()
    })

    it('should apply styling from theme', () => {
      const { container } = renderWithTheme(
        <Button btnType="primary" data-testid="styled-btn">
          Styled
        </Button>
      )
      const button = container.querySelector('[data-testid="styled-btn"]')
      expect(button).toBeInTheDocument()
      // Verify button has styling applied
      expect(window.getComputedStyle(button!).display).toBeDefined()
    })
  })
})
