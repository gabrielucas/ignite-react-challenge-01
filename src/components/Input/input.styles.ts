import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${({ theme }) => theme['--gray-500']};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme['--gray-700']};

  display: flex;
  flex: 1;
  align-items: center;

  &:focus {
    border: 1px solid ${({ theme }) => theme['--purple-dark']};
  }
`

export { StyledInput }
