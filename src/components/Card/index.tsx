import { ReactNode } from 'react'
import * as S from './styles'

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <S.Container>{children}</S.Container>
}
