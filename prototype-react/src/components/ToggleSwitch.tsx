
import { useCallback, useState } from 'react'
import '/src/components/toggle-switch.css'

type ComponentProps = {
  children?: any
  id?: string
  name?: string
  value?: boolean
  disabled?: boolean
  style?: 'rounded' | 'square'
  text?: boolean
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray'
  label?: 'left' | 'right'
  updateValue?: (value: boolean) => any
}

export default function ToggleSwitch({ children, id, name, disabled, ...props }: ComponentProps) {
  const [checked, setChecked] = useState(props.value ?? false)
  const dummyId = id ?? `switch-${Date.now()}`
  const onHandleChange = useCallback(($checked: boolean) => {
    props?.updateValue?.($checked)
    setChecked($checked)
  }, [checked])
  // https://github.com/adamculpepper/toggle-switchy#options
  const wrapperProps = {
    ...props.style && { 'data-style': props.style },
    'data-text': props?.text ?? true,
    'data-size': props?.size ?? 'md',
    ...props.color && { 'data-color': props.color },
    ...props.label === 'left' && { 'data-label': props.label },
  }
  const chechboxProps = {
    id: dummyId,
    name: name ?? dummyId,
    checked: checked,
    disabled: !!disabled,
  }
  return (
    <label htmlFor={dummyId} className="toggle-switchy" {...wrapperProps}>
      <input
        type="checkbox"
        {...chechboxProps}
        onChange={(e) => onHandleChange(e.target.checked)}
      />
      <span className="toggle">
        <span className="switch"></span>
      </span>
      {((label: any) => !label ? <></> : <span className="switchy-label">{ label }</span>)(children)}
    </label>
  )
}