import styled from 'styled-components'

const TaskContainer = styled.li<{ checked: boolean }>`
  background: ${({ theme }) => theme['--gray-500']};
  border: 1px solid ${({ theme }) => theme['--gray-400']};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  position: relative;

  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > p {
    font-size: 0.875rem;
    line-height: 140%;

    text-decoration-line: ${({ checked }) =>
      checked ? 'line-through' : 'none'};

    color: ${({ checked, theme }) =>
      checked ? `${theme['--gray-300']}` : 'inherit'};
  }

  & > button {
    cursor: pointer;
    position: absolute;
    right: 16px;

    &:hover > svg {
      transition: fill 0.1s;
      fill: ${({ theme }) => theme['--danger']};
    }
  }
`

export { TaskContainer }
