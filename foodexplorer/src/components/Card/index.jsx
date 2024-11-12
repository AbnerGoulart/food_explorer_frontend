import { Container } from "./styles";
import { Button } from "../Button";
import { PiPlus, PiMinus } from "react-icons/pi";
import { useReducer, useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";
import { DishesContext } from "../../contexts/DishesContext";

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

export function Card({ title, img, price }) {
  const [state, dispatch] = useReducer(reducer, initializeState);
  const { setCount } = useContext(CounterContext);

  const dishes = useContext(DishesContext);

  if (!dishes) return <p>Carregando...</p>

  const handleAddToCart = () => {
    setCount(prevCount => prevCount + state.count);
  };

  return (
    <Container>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <span className="price">R${price}</span>
      <div className="amount">
        <button onClick={() => dispatch({ type: 'decrement' })}>
          <PiMinus />
        </button>
        <span>{String(state.count).padStart(2, '0')}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>
          <PiPlus />
        </button>
      </div>
      <Button title="incluir" onClick={handleAddToCart} />
    </Container>
  );
}
