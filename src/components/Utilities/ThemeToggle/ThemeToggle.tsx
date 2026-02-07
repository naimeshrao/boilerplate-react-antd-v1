import { useTheme } from '@/theme'
import { Button } from 'antd'

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
