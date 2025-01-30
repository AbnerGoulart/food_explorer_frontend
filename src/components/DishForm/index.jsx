import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { PiUploadSimpleBold } from "react-icons/pi";
import { Input } from "../Input";
import { FaChevronLeft } from "react-icons/fa";
import { TagItem } from "../TagItem";
import { useState } from "react";

// Estou declarando um componente denominado DishForm que recebe como prop:
// - isEditable,
// title,
// setTitle,
// session,
// setSession,
// description,
// setDescription,
// price,
// setPrice,

// Todas essas Props estão sendo passadas pelas páginas /new ou /edit
// Neste componente, temos a redenderização dos componentes TagItem

export function DishForm({
  isEditable,
  title,
  tags,
  setTags,
  setTitle,
  section,
  setSection,
  description,
  setDescription,
  price,
  setPrice,
  photo,
  setPhoto,
  handleNewDish,
  handleRemoveDish,
  updateDish,
}) {
  const [newTag, setNewTag] = useState("");

  const deleteTag = (deleted) => {
    setTags(tags.filter((t) => t !== deleted));
  };

  const createTag = () => {
    if (newTag.length > 0) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }
  };

  let tagItems = [""];

  if (tags) {
    tagItems = tags.map((tag, index) => (
      <TagItem key={index} value={tag} isNew={false} handleDelete={deleteTag} />
    ));
  }

  const keyDown = (event) => {
    if (event.key === "Enter") {
      createTag();
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <Container className="edit-wrapper">
      <div className="form-wrapper">
        <Link to="/">
          <ButtonText className="backButton" size={24}>
            <FaChevronLeft /> Voltar
          </ButtonText>
        </Link>
        {isEditable ? (
          <h1 className="title">Editar prato</h1>
        ) : (
          <h1 className="title">Novo prato</h1>
        )}
        <div className="imgInput">
          <p>Imagem do prato</p>
          <label for="imgUpload" className="custom-file-upload">
            <PiUploadSimpleBold /> Selecione imagem
          </label>
          <input type="file" id="imgUpload" />
        </div>
        <div className="nameInput">
          <p>Nome</p>
          <Input
            type="text"
            placeholder="Ex: Salada Ceasar"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="categoryInput">
          <p>Categoria</p>
          <select
            name="categories"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="" defaultValue="selected">
              Escolha uma categoria
            </option>
            <option value="meals">-- Refeições</option>
            <option value="main_dishes">-- Pratos Principais</option>
            <option value="drinks">-- Bebidas</option>
          </select>
        </div>
        <div className="ingredientInput">
          <p>Ingredientes</p>
          <div className="ingredients" onKeyDown={keyDown}>
            {isEditable ? tagItems : null}
            <TagItem
              placeholder="Adicionar"
              isNew={true}
              createTag={createTag}
              setNewTag={setNewTag}
              newTag={newTag}
            />
          </div>
        </div>
        <div className="priceInput">
          <p>Preço</p>
          <Input
            type="text"
            placeholder="R$ 00,00"
            value={formatPrice(price)}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="descriptionInput">
          <p>Descrição</p>
          <textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição "
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="buttons">
          {isEditable ? (
            <Button title="Excluir prato" onClick={handleRemoveDish} />
          ) : null}
          {isEditable ? (
            <Button title="Salvar alterações" onClick={updateDish} />
          ) : (
            <Button title="Salvar alterações" onClick={handleNewDish} />
          )}
        </div>
      </div>
    </Container>
  );
}
