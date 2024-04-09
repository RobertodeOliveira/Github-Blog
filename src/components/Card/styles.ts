import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    background: ${theme.colors.basePost};

    border-radius: 10px;

    :&hover {
      border: 2px solid ${theme.colors.baseLabel};
    }
  `}
`

export const Wrapper = styled.div``
