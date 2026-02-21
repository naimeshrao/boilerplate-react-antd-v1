import {
  InputStyle,
  InputStyleDisabled,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { InputNumber as AntdInputNumber } from 'antd'
import styled from 'styled-components'

export const InputNumber = styled(AntdInputNumber)`
  &.ant-input-number-outlined {
    width: 100%;
    ${InputStyle};
    ${SingleLineInput};

    &:not(.ant-input-number-disabled):hover {
      ${InputStyleHover};
    }

    &.ant-input-number-focused {
      ${InputStyleFocused};
    }

    .ant-input-number-input {
    }

    // Disabled State
    &.ant-input-number-disabled {
      ${InputStyleDisabled};
      &:hover {
        ${InputStyleDisabled};
      }
    }

    // Error State
    &.ant-input-number-status-error:not(.ant-input-number-disabled) {
      ${InputStyleError};
    }
  }
`
