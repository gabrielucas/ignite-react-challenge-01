import styled from 'styled-components'

const NoTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 4rem 1.5rem;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme['--gray-400']};

  p {
    width: 100%;
    text-align: center;
    line-height: 140%;
    color: ${({ theme }) => theme['--gray-300']};
  }
`

export { NoTasksContainer }
