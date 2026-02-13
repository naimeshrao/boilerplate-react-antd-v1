import { ellipsis } from '@/theme/styles/sharedStyles'
import { Form } from 'antd'
import styled from 'styled-components'

interface FloatingInputStyleProps {
  $mb?: number
}

export const FloatingInputStyle = styled(Form.Item)<FloatingInputStyleProps>`
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : '24px')};

  .floating-input {
    .float-input-label {
      ${ellipsis}
      position: absolute;
      left: 14px;
      top: 0;
      z-index: 1;
      pointer-events: none;
      transition: all 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
      max-width: 90%;
      font-size: 14px;
      line-height: 50px;
      color: ${({ theme }) => theme.colors['gray-500']};
    }

    &.is-focused,
    &.is-filled {
      .float-input-label {
        left: 14px;
        top: -5px;
        line-height: 18px;
        font-size: 14px;
        padding: 0 4px;
        border-radius: 3px;
        background: white;
      }
    }

    // Input Affix Wrapper
    .ant-input-affix-wrapper {
      & + .float-input-label {
      }
    }
  }

  // ===== Input Error =====
  .ant-form-item-additional {
    .ant-form-item-explain-error {
      font-size: 12px;
      line-height: 16px;
    }
  }

  // ===== Input Style Reset =====
  .ant-picker-input {
    input::placeholder {
      opacity: 0;
    }
  }
`
