import {
  useState,
  cloneElement,
  ReactElement,
  ChangeEvent,
  FocusEvent
} from 'react'
import type { FormItemProps } from 'antd'
import { FloatingInputStyle } from './FloatingInput.style'

type InputChangeEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string
  | number
  | null

type ChildProps = {
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onChange?: (value: InputChangeEvent, option?: unknown) => void
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
    onFocus: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(true)
      children.props.onFocus?.(e)
    },
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false)
      children.props.onBlur?.(e)
    },
    onChange: (value: InputChangeEvent, option?: unknown) => {
      let actualValue: string | number | null
      if (typeof value === 'object' && value !== null && 'target' in value) {
        actualValue = value.target.value
      } else {
        actualValue = value
      }

      if (Array.isArray(actualValue)) {
        setIsFilled(actualValue.length > 0)
      } else {
        setIsFilled(
          actualValue !== null &&
            actualValue !== undefined &&
            actualValue !== ''
        )
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
