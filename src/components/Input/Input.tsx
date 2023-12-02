import { StyledInput } from './input.styles'
import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...rest }) => <StyledInput {...rest} />
