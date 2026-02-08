import { ThemeConfig } from 'antd'
import { ThemeMode } from './types'

export const getAntdTheme = (mode: ThemeMode): ThemeConfig => ({
  token: {
    colorPrimary: mode === 'light' ? '#0C78FF' : '#5A96FF',
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
