import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { Input } from '../../components/Input'
import { TagItem } from '../../components/TagItem'

export function NewDish(){
  return(
    <Container>
      <Header />
      <div className="wrapper">
        <Link to="/">
          <ButtonText>
            Voltar
          </ButtonText>
        </Link>
        <h1>Novo prato</h1>
        <div className="labelInput">
          <p>Imagem do prato</p>
          <Input type="text" placeholder='Selecione imagem'/>
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
          <div className="ingredients">
            <TagItem value="Pão" isNew={false}/>
            <TagItem placeholder="Adicionar" isNew={true}/>
          </div>
        </div>
        <div className="labelInput">
          <p>Preço</p>
          <Input type="text" placeholder='R$ 00,00'/>
        </div>
        <div className="labelInput">
          <p>Descrição</p>
          <textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição '></textarea>
        </div>
        <Button title="Salvar alterações" />
      </div>
      <Footer />
    </Container>
  )
}