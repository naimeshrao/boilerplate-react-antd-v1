import React from 'react'
import type { ButtonProps as AntdButtonProps } from 'antd'
import { StyledButton } from './Button.style'

export interface ButtonProps extends AntdButtonProps {
  btnType?: 'primary' | 'secondary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({ children, btnType, ...rest }) => {
  return (
    <StyledButton {...rest} btnType={btnType}>
      {children}
    </StyledButton>
  )
}

export default Button
