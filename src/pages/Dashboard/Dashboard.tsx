import { Button } from '@/components'
import { useTranslation } from 'react-i18next'

interface DashboardProps {
  message?: string
}

const Dashboard = ({ message = 'Dashboard' }: DashboardProps) => {
  const { t } = useTranslation('account')

  return (
    <div>
      <h1>{message}</h1>

      <p>{t('Welcome')}</p>

      <Button type="primary" size="large">
        Primary
      </Button>
    </div>
  )
}

export default Dashboard
