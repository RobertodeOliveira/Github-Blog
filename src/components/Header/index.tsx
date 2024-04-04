import * as S from './styles'
import imgLeft from '../../assets/img/imgLeft.svg'
import imgRight from '../../assets/img/imgRight.svg'
import imgLogo from '../../assets/img/logo.svg'
import textLogo from '../../assets/img/GITHUB BLOG.svg'

export function Header() {
  return (
    <S.Container>
      <img src={imgLeft} alt="" />
      <S.WrapperLogo>
        <img className="imgLogo" src={imgLogo} alt="" />
        <img className="textLogo" src={textLogo} alt="" />
      </S.WrapperLogo>
      <img src={imgRight} alt="" />
    </S.Container>
  )
}
