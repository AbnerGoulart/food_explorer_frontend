import { Container } from './styles';
import { ButtonText } from '../ButtonText'

export function DescriptionCard(){
  return (
    <Container>
      <div className="header">
        <ButtonText title="< voltar" />
      </div>
      <img src="/camarao.png" alt="" />
      <h1>Camarão Carão</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
    </Container>
  )
}