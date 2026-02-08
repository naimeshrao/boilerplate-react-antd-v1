import styled from 'styled-components'
import { Button as AntdButton } from 'antd'

export const StyledButton = styled(AntdButton)<{
  btnType?: 'primary' | 'secondary' | 'danger'
}>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.primary};  
`
