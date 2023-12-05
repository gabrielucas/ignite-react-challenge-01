import { FunctionComponent } from 'react'

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './styles'
import { Check } from '@phosphor-icons/react'

export interface ICheckboxProps {
  checked: boolean
  onChangeTasksStatus(): void
}

export const Checkbox: FunctionComponent<ICheckboxProps> = ({
  checked,
  onChangeTasksStatus,
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox defaultChecked={checked} />
      <StyledCheckbox onClick={onChangeTasksStatus} checked={checked}>
        {checked && <Check size={10} weight="bold" />}
      </StyledCheckbox>
    </CheckboxContainer>
  )
}
