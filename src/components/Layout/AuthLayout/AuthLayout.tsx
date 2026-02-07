import Images from '@/constants/images'
import { Outlet } from 'react-router-dom'

interface AuthLayoutProps {
  title?: string
}

const AuthLayout = ({ title }: AuthLayoutProps) => {
  return (
    <div>
      <img src={Images.logo} alt="Logo" />
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default AuthLayout
