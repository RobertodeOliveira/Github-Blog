import * as S from './styles'
import gitHub from '../../assets/img/github.png'
import folowers from '../../assets/img/profile.svg'
import gitHubIcon from '../../assets/img/git-hub-icon.svg'
import comporation from '../../assets/img/corporation.svg'

export function CardProfile(props: any) {
  console.log(props)
  return (
    <S.CardProfile>
      <img src={props.props.avatar_url} alt="" />
      <S.Container>
        <S.Wrapper>
          <S.WrapperHeader>
            <h3>{props.props.login}</h3>
            <img src={gitHub} alt="" />
          </S.WrapperHeader>
          <p>{props.props.bio}</p>
          <S.Footer>
            <div>
              <img src={gitHubIcon} alt="" />
              <p>{props.props.name}</p>
            </div>
            <div>
              <img src={comporation} alt="" />
              <p>Rocketseat</p>
            </div>
            <div>
              <img src={folowers} alt="" />
              <p>{props.props.followers} seguidores</p>
            </div>
          </S.Footer>
        </S.Wrapper>
      </S.Container>
    </S.CardProfile>
  )
}
