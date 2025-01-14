import { Container } from "./styles";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { PiPlus, PiMinus, PiHeart, PiHeartFill, PiPencil } from "react-icons/pi";
import { useReducer, useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { DishesContext } from "../../contexts/DishesContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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
  const [isLike, setIsLike] = useState(false)
  const { items, setItems } = useContext(CartContext);
  const { type } = useContext(AuthContext)
  const dishes = useContext(DishesContext);
  const navigate = useNavigate()


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

  const handleEdit = () => {
    navigate(`/details/${id}`)
  }

  const toggleLike = () => {setIsLike((prevState) => !prevState)}
  const renderHeart = () => {
    return isLike === true ? <PiHeartFill onClick={toggleLike}/> : <PiHeart onClick={toggleLike}/>
  }

  return (
    <Container>
      <div className="action">
        <ButtonText>
          {type === "admin" ? <PiPencil onClick={handleEdit}/> : renderHeart()}
        </ButtonText>
      </div>
      <Link to={`details/${id}`} >
        <img src={img} alt={title} />
      </Link>
      <h3>{title}</h3>
      <span className="price">{formatPrice(price)}</span>
      <div className="amount">
        <ButtonText onClick={() => dispatch({ type: 'decrement' })}>
          <PiMinus />
        </ButtonText>
        <span>{String(state.count).padStart(2, '0')}</span>
        <ButtonText onClick={() => dispatch({ type: 'increment' })}>
          <PiPlus />
        </ButtonText>
        <Button title="incluir" onClick={() => handleAddToCart(title, price)} />
      </div>
    </Container>
  );
}
