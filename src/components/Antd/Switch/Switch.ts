import { Switch as AntdSwitch } from 'antd'
import styled from 'styled-components'

export const Switch = styled(AntdSwitch)`
  .ant-switch-handle {
    &:before {
    }
  }

  .ant-switch-inner {
    .ant-switch-inner-checked {
    }
    .ant-switch-inner-unchecked {
    }
  }

  // ===== Checked State =====
  &.ant-switch-checked {
  }

  // ===== Disabled State =====
  &.ant-switch-disabled {
  }

  // ===== Small Size =====
  &.ant-switch-small {
  }

  // ===== User Accessibility =====
  &:focus-visible {
    outline: 2px solid;
  }
`
