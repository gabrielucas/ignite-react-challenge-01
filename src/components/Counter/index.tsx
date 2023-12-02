import { FunctionComponent } from 'react'
import { CounterBox } from './styles'

interface ICounterProps {
  title: string
  value: number | string
  type: 'created' | 'completed'
}

export const Counter: FunctionComponent<ICounterProps> = ({
  title,
  value,
  type,
}) => (
  <CounterBox $type={type}>
    <strong>{title}</strong>
    <div className="counter">{value}</div>
  </CounterBox>
)
