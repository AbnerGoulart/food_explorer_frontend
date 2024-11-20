import { Container } from "./styles";
import { Button } from "../Button";
import { PiPlus, PiMinus } from "react-icons/pi";
import { useReducer, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { DishesContext } from "../../contexts/DishesContext";
import { Link } from "react-router-dom";

const initializeState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 1 ? state.count - 1 : 1 };
    default:
      return state;
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price)
}

export function Card({ title, img, price, id }) {
  const [state, dispatch] = useReducer(reducer, initializeState);
  const { items, setItems } = useContext(CartContext);
  const dishes = useContext(DishesContext);

  if (!dishes) return <p>Carregando...</p>

  const handleAddToCart = (title, price) => {
    const addedItems = []
    for (let i = 0; i < state.count; i++) {
      addedItems.push({ item: title, price: price })
    }

    setItems([
      ...items,
      ...addedItems
    ]);
  };

  return (
    <Container>
      <Link to={`details/${id}`} >
        <img src={img} alt={title} />
      </Link>
      <h3>{title}</h3>
      <span className="price">{formatPrice(price)}</span>
      <div className="amount">
        <button onClick={() => dispatch({ type: 'decrement' })}>
          <PiMinus />
        </button>
        <span>{String(state.count).padStart(2, '0')}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>
          <PiPlus />
        </button>
      </div>
      <Button title="incluir" onClick={() => handleAddToCart(title, price)} />
    </Container>
  );
}
