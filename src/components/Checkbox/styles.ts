import styled from 'styled-components'

const CheckboxContainer = styled.div`
  width: 1rem;
  height: 1rem;

  display: flex;
  justify-content: center;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1px;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
`

const StyledCheckbox = styled.label<{ checked: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;

  border: 2px solid
    ${({ checked, theme }) =>
      checked ? `${theme['--purple-dark']}` : `${theme['--blue']}`};

  background-color: ${({ checked, theme }) =>
    checked && `${theme['--purple-dark']}`};

  transition:
    border 0.1s,
    background-color 0.1s;

  &:hover {
    border: 2px solid
      ${({ checked, theme }) =>
        checked ? `${theme['--purple']}` : `${theme['--blue-dark']}`};
    background-color: ${({ checked, theme }) =>
      checked ? `${theme['--purple']}` : `${theme['--blue-dark-400']}`};
  }
`

export { CheckboxContainer, HiddenCheckbox, StyledCheckbox }
