import styled from 'styled-components'

const TaskManagerContainer = styled.main`
  margin: 0 auto;
  width: 50vw;

  position: relative;
  bottom: 26px;

  form {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    & {
      width: calc(100vw - 4rem);
    }

    form {
      flex-direction: column;
      margin-bottom: 3rem;
    }
  }
`

const CreateTaskButton = styled.button.attrs({ type: 'submit' })`
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme['--blue-dark']};
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  transition: background-color 0.1s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['--blue']};
  }

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme['--gray-300']};
  }

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`

export { CreateTaskButton, TaskManagerContainer }
