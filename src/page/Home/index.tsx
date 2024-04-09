import * as S from './styles'
import { CardProfile } from '../../components/CardProfile'
import { Card } from '../../components/Card'
import { useUser } from '../../hooks/useUsers'

export function Home() {
  const { infoUser } = useUser('robertodeoliveira')

  return (
    <S.Container>
      <CardProfile props={infoUser} />

      <form>
        <input placeholder="Buscar conteúdo" type="text" />
      </form>

      <S.Content>
        <Card>Conteúdo</Card>
        <Card>Conteúdo</Card>
        <Card>Conteúdo</Card>
        <Card>Conteúdo</Card>
      </S.Content>
    </S.Container>
  )
}
