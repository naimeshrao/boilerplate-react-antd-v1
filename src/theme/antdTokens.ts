import { ThemeConfig } from 'antd'
import { ThemeMode } from './colors'

export const getAntdTheme = (mode: ThemeMode): ThemeConfig => ({
  token: {
    colorPrimary: mode === 'light' ? '#0C78FF' : '#5A9DFF',
    borderRadius: 6
  },
  components: {
    Button: {
      borderRadius: 6
    },
    Input: {
      controlHeight: 38
    }
  }
})
