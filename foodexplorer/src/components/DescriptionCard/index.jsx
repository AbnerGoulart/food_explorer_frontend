import { Container } from './styles';
import { ButtonText } from '../ButtonText'
import { Tag } from '../Tag'

export function DescriptionCard(){
  return (
    <Container>
      <div className="header">
        <ButtonText title="< voltar" />
      </div>
      <img src="/camarao.png" alt="" />
      <h1>Camarão Carão</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
      <div className="tags">
        <Tag title="camarão" />
        <Tag title="massa" />
        <Tag title="gergelim" />
        <Tag title="alho" />
        <Tag title="grelhado" />
        <Tag title="hot" />
      </div>
    </Container>
  )
}