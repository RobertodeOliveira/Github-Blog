import * as S from './styles'
import profile from '../../assets/img/avatar.png'
import gitHub from '../../assets/img/github.png'
import folowers from '../../assets/img/profile.svg'
import gitHubIcon from '../../assets/img/git-hub-icon.svg'
import comporation from '../../assets/img/corporation.svg'

export function CardProfile() {
  return (
    <S.CardProfile>
      <img src={profile} alt="" />
      <S.Container>
        <S.Wrapper>
          <S.WrapperHeader>
            <h3>Cameron Williamson</h3>
            <img src={gitHub} alt="" />
          </S.WrapperHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <S.Footer>
            <div>
              <img src={gitHubIcon} alt="" />
              <p>cameronwll</p>
            </div>
            <div>
              <img src={comporation} alt="" />
              <p>Rocketseat</p>
            </div>
            <div>
              <img src={folowers} alt="" />
              <p>32 seguidores</p>
            </div>
          </S.Footer>
        </S.Wrapper>
      </S.Container>
    </S.CardProfile>
  )
}
