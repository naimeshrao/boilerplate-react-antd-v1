/* eslint-disable @typescript-eslint/no-empty-object-type */

import 'styled-components'
import { AppTheme } from '../theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
