import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { Input } from '../../components/Input'

export function EditDish(){
  return(
    <Container>
      <Header />
      <div className="wrapper">
        <Link to="/">
          <ButtonText size={24}>
            Voltar
          </ButtonText>
        </Link>
        <h1>Novo prato</h1>
        <div className="labelInput">
          <p>Imagem do prato</p>
          <Input icon={PiUploadSimpleBold} placeholder="Selecione imagem" />
        </div>
        <div className="labelInput">
          <p>Nome</p>
          <Input type="text" placeholder='Ex: Salada Ceasar'/>
        </div>
        <div className="labelInput">
          <p>Categoria</p>
          <Input type="text" placeholder='Bebidas'/>
        </div>
        <div className="labelInput">
          <p>Ingredientes</p>
          <Input type="text" />
        </div>
        <div className="labelInput">
          <p>Preço</p>
          <Input type="text" placeholder='R$ 00,00'/>
        </div>
        <div className="labelInput">
          <p>Descrição</p>
          <textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição '></textarea>
        </div>
        <div className="buttons">
          <Button title="Excluir prato" />
          <Button title="Salvar alterações" />
        </div>
      </div>
      <Footer />
    </Container>
  )
}