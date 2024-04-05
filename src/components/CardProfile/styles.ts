import styled, { css } from 'styled-components'

export const CardProfile = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    background: ${theme.colors.basePost};

    border-radius: 10px;
    margin-top: -120px;
    display: flex;
    gap: 32px;
  `}
`

export const Container = styled.div``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: 8px;

    h3 {
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: 8px;
    }

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: 25.6px;
    }
  `}
`

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 19px;
    width: 67px;
  }
`

export const Footer = styled.div`
  display: flex;
  margin-top: 24px;
  display: flex;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
