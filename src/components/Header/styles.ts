import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 296px;
    width: 100%;
    background: ${theme.colors.baseProfile};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  margin-top: -120px;

  img:first-child {
    height: 40px;
    width: 45px;
  }

  img:last-child {
    height: 40px;
    width: 148px;
  }
`
