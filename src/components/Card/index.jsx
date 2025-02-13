import { Container } from "./styles";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { useReducer, useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { DishesContext } from "../../contexts/DishesContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  PiPlus,
  PiMinus,
  PiHeart,
  PiHeartFill,
  PiPencilSimple,
} from "react-icons/pi";
import theme from "../../styles/theme";

const initializeState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count > 1 ? state.count - 1 : 1 };
    default:
      return state;
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
};

export function Card({ title, img, price, id, description }) {
  const [state, dispatch] = useReducer(reducer, initializeState);
  const [isLike, setIsLike] = useState(false);
  const { items, setItems } = useContext(CartContext);
  const { type } = useContext(AuthContext);
  const dishes = useContext(DishesContext);
  const navigate = useNavigate();

  if (!dishes) return <p>Carregando...</p>;

  const handleAddToCart = (title, price) => {
    const addedItems = [];
    for (let i = 0; i < state.count; i++) {
      addedItems.push({ item: title, price: price });
    }

    setItems([...items, ...addedItems]);
  };

  const handleEditPage = () => {
    navigate(`/edit/${id}`);
  };

  const toggleLike = () => {
    setIsLike((prevState) => !prevState);
  };

  const renderHeart = () => {
    return isLike === true ? (
      <PiHeartFill 
        onClick={toggleLike} 
        style={{
          color: theme.COLORS.TOMATO_200
        }}
      />
    ) : (
      <PiHeart
        onClick={toggleLike}
      />
    );
  };

  return (
    <Container>
      <div className="action">
        <ButtonText>
          {type === "admin" ? (
            <PiPencilSimple onClick={handleEditPage} />
          ) : (
            renderHeart()
          )}
        </ButtonText>
      </div>
      <Link to={`/details/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="price">{formatPrice(price)}</span>
      { type === "admin" ? null : <div className="amount">
        <div className="counter">
          <ButtonText onClick={() => dispatch({ type: "decrement" })}>
            <PiMinus />
          </ButtonText>
          <span>{String(state.count).padStart(2, "0")}</span>
          <ButtonText onClick={() => dispatch({ type: "increment" })}>
            <PiPlus />
          </ButtonText>
        </div>
        <Button title="incluir" onClick={() => handleAddToCart(title, price)} />
      </div> }
    </Container>
  );
}
