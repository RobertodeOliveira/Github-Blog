import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    form {
      margin-top: 113px;

      input {
        width: 100%;
        padding: 12px 16px;
        border-radius: 6px;
        border: 1px solid ${theme.colors.baseborder};
        background: ${theme.colors.baseInput};

        &:active {
          border-color: ${theme.colors.blue};
        }
      }
    }
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
  margin-top: 48px;
`
