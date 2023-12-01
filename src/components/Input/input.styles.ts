import styled from "styled-components"

const StyledInput = styled.input`
  background: var(--gray-500);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--gray-700);

  display: flex;
  flex: 1;
  align-items: center;

  &:focus {
    border: 1px solid var(--purple-dark);
  }
`

export { StyledInput }
