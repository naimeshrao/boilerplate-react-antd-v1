import { Outlet } from 'react-router-dom'

interface FallbackLayoutProps {
  title?: string
}

const FallbackLayout = ({ title }: FallbackLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default FallbackLayout
