import { useState, cloneElement, ReactElement } from 'react'
import type { FormItemProps } from 'antd'
import { FloatingInputStyle } from './FloatingInput.style'

type ChildProps = {
  onFocus?: (...args: any[]) => void
  onBlur?: (...args: any[]) => void
  onChange?: (...args: any[]) => void
}

interface FloatingInputProps extends FormItemProps {
  label: string
  children: ReactElement<ChildProps>
  mb?: number
}

export function FloatingInput({
  label,
  children,
  mb,
  ...formItemProps
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const clonedChild = cloneElement(children, {
    onFocus: (e: any) => {
      setIsFocused(true)
      children.props.onFocus?.(e)
    },
    onBlur: (e: any) => {
      setIsFocused(false)
      children.props.onBlur?.(e)
    },
    onChange: (value: any, option?: any) => {
      let actualValue = value
      if (value?.target) {
        actualValue = value.target.value
      }
      if (Array.isArray(actualValue)) {
        setIsFilled(actualValue.length > 0)
      } else {
        setIsFilled(!!actualValue)
      }
      children.props.onChange?.(value, option)
    }
  })

  return (
    <FloatingInputStyle $mb={mb} {...formItemProps}>
      <div
        className={`floating-input ${
          isFocused ? 'is-focused' : ''
        } ${isFilled ? 'is-filled' : ''}`}
      >
        {clonedChild}
        <label className="float-input-label">{label}</label>
      </div>
    </FloatingInputStyle>
  )
}
