import { Container, ReceiptIcon } from "./styles";
import { ButtonText } from "../ButtonText";
import { Tag } from "../Tag";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { DetailContext } from "../../contexts/DetailContext";
import { useContext } from "react";
import { API_BASE_URL } from "../../services/api";

export function DescriptionCard() {
  const dish = useContext(DetailContext);

  if (!dish) return <p>Carregando...</p>;

  const renderTags = () => {
    const tags = [];
    dish.tags &&
      dish.tags.map((tag) => {
        tags.push(<Tag title={tag} />);
      });

    return tags;
  };

  return (
    <Container>
      <Link to="/" className="header">
        <ButtonText>
          Voltar
        </ButtonText>
      </Link>
      <div className="wrapper">
        <img src={`${API_BASE_URL}/files/${dish.photo}`} alt="imagem do prato" />
        <div className="description">
          <h1>{dish.title}</h1>
          <p>{dish.description}</p>
          <div className="tags">{renderTags()}</div>
          <div className="checkout">
            <div className="counter">
              <button>
                <PiMinus />
              </button>
              <span>01</span>
              <button>
                <PiPlus />
              </button>
            </div>
            <Button icon={<ReceiptIcon />} price={dish.price} title=" Pedir" />
          </div>
        </div>
      </div>
    </Container>
  );
}
