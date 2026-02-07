import { ThemeToggle } from '@/components/Utilities/ThemeToggle/ThemeToggle'
import { Outlet } from 'react-router-dom'

interface AppLayoutProps {
  title?: string
}

const AppLayout = ({ title }: AppLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <ThemeToggle />
      <Outlet />
    </div>
  )
}

export default AppLayout
