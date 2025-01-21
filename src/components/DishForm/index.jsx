import { Container } from "./styles"; 
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { PiUploadSimpleBold } from "react-icons/pi";
import { Input } from "../Input";
import { FaChevronLeft } from "react-icons/fa";
import { TagItem } from "../TagItem";

// Estou declarando um componente denominado DishForm que recebe como prop:
// - isEditable
export function DishForm({isEditable}) {
  return (
    <Container className="edit-wrapper">
      <div className="edit-wrapper">
        <Link to="/">
          <ButtonText className="backButton" size={24}>
            <FaChevronLeft /> Voltar
          </ButtonText>
        </Link>
        {isEditable ? <h1 className="title">Editar prato</h1> : <h1 className="title">Novo prato</h1>}
        <div className="imgInput">
          <p>Imagem do prato</p>
          <label for="imgUpload" className="custom-file-upload">
            <PiUploadSimpleBold /> Selecione imagem
          </label>
          <input type="file" id="imgUpload" />
        </div>
        <div className="nameInput">
          <p>Nome</p>
          <Input type="text" placeholder="Ex: Salada Ceasar" />
        </div>
        <div className="categoryInput">
          <p>Categoria</p>
          {/* <Input type="text" placeholder="Bebidas" /> */}
          <select name="categories">
            <option value="meal">Refeições</option>
            <option value="main-dishes">Pratos Principais</option>
            <option value="drinks">Bebidas</option>
          </select>
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
          {isEditable ? <Button title="Excluir prato" /> : null}
          <Button title="Salvar alterações" />
        </div>
      </div>
    </Container>
  );
}
