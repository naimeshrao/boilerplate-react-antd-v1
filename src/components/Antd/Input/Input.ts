import { Input as AntdInput } from 'antd'
import styled, { css } from 'styled-components'

const baseInputStyles = css`
  caret-color: gray;

  // ===== Hover/Focus =====
  &:hover {
  }

  &:focus,
  &.ant-input-affix-wrapper-focused {
  }

  // ===== Sizes =====
  &.ant-input-sm {
  }

  &.ant-input-lg {
  }

  // ===== Affix / Suffix Icon =====
  &.ant-input-affix-wrapper {
    .ant-input-prefix {
    }

    .ant-input-suffix {
    }
  }

  // ===== Error State =====
  &.ant-input-status-error:not(.ant-input-disabled) {
    &:hover {
      border-color: ${({ theme }) => theme.colors['error-dark']};
    }
  }

  // ===== Autofill Fix =====
  .ant-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: black;
  }
`

export const Input = styled(AntdInput)`
  ${baseInputStyles}
`

export const TextArea = styled(AntdInput.TextArea)`
  ${baseInputStyles}

  resize: none;
`

export const Password = styled(AntdInput.Password)`
  ${baseInputStyles}
`

export const Search = styled(AntdInput.Search)`
  ${baseInputStyles}
`
