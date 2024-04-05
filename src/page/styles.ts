import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBackground};
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
export const Wrapper = styled.div`
  max-width: 864px;
  width: 100%;
`
