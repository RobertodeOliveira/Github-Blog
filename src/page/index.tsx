import { Header } from '../components/Header'
import * as S from './styles'
import { Outlet } from 'react-router-dom'

export function Page() {
  return (
    <>
      <S.Container>
        <Header />
        <S.Wrapper>
          <Outlet />
        </S.Wrapper>
      </S.Container>
    </>
  )
}
