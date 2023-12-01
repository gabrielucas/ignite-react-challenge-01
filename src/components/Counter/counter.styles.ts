import styled from "styled-components"

const CounterBox = styled.div<{ $type: string }>`
  display: flex;
  gap: 8px;

  & > strong {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ $type }) => {
      if ($type === "created") return `var(--blue-dark)`
      if ($type === "completed") return `var(--purple)`
    }};
  }

  & .counter {
    background: var(--gray-400);
    padding: 0.125rem 0.5rem;

    font-size: 0.75rem;
    font-weight: 700;
    color: var(--gray-200);

    border-radius: 999px;

    display: flex;
    align-items: center;
  }
`

export { CounterBox }
