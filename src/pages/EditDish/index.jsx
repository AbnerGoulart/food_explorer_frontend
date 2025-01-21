import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { PiUploadSimpleBold } from "react-icons/pi";
import { Input } from "../../components/Input";
import { FaChevronLeft } from "react-icons/fa";
import { TagItem } from "../../components/TagItem";

export function EditDish() {
  return (
    <Container>
      <Header />
      <div className="edit-wrapper">
        <Link to="/">
          <ButtonText className="backButton" size={24}>
            <FaChevronLeft /> Voltar
          </ButtonText>
        </Link>
        <h1 className="title">Novo prato</h1>
        <div className="imgInput">
          <p>Imagem do prato</p>
          <Input icon={PiUploadSimpleBold} placeholder="Selecione imagem" />
        </div>
        <div className="nameInput">
          <p>Nome</p>
          <Input type="text" placeholder="Ex: Salada Ceasar" />
        </div>
        <div className="categoryInput">
          <p>Categoria</p>
          <Input type="text" placeholder="Bebidas" />
        </div>
        <div className="ingredientInput">
          <p>Ingredientes</p>
          <div className="ingredients">
            <TagItem value="Pão" isNew={false} />
            <TagItem placeholder="Adicionar" isNew={true} />
          </div>
        </div>
        <div className="priceInput">
          <p>Preço</p>
          <Input type="text" placeholder="R$ 00,00" />
        </div>
        <div className="descriptionInput">
          <p>Descrição</p>
          <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição "></textarea>
        </div>
        <div className="buttons">
          <Button title="Excluir prato" />
          <Button title="Salvar alterações" />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
