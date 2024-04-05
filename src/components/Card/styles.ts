import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    background: ${theme.colors.basePost};

    border-radius: 10px;
  `}
`

export const Wrapper = styled.div``
