import { Container, ReceiptIcon } from "./styles";
import { ButtonText } from "../ButtonText";
import { Tag } from "../Tag";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Button } from "../Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailContext } from "../../contexts/DetailContext";
import { useContext, useReducer } from "react";
import { API_BASE_URL } from "../../services/api";
import { FaChevronLeft } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "../../contexts/AuthContext";

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

export function DescriptionCard() {
  const dish = useContext(DetailContext);
  const [state, dispatch] = useReducer(reducer, initializeState);
  const { items, setItems } = useContext(CartContext);
  const isLargeScreen = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG });
  const { type } = useContext(AuthContext);
  const navigate = useNavigate()
  const {id} = useParams()

  if (!dish) return <p>Carregando...</p>;

  const renderTags = () => {
    const tags = [];
    dish.tags &&
      dish.tags.map((tag) => {
        tags.push(<Tag title={tag} />);
      });

    return tags;
  };

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

  return (
    <Container>
      <Link to="/" className="header">
        <ButtonText className="backButton" size={24}>
          <FaChevronLeft />
          Voltar
        </ButtonText>
      </Link>
      <div className="wrapper">
        <img
          src={`${API_BASE_URL}/files/${dish.photo}`}
          alt="imagem do prato"
        />
        <div className="description">
          <h1>{dish.title}</h1>
          <p>{dish.description}</p>
          <div className="tags">{renderTags()}</div>
          <div className="checkout">
            {type !== "admin" ? (
              <>
                <div className="counter">
                  <button onClick={() => dispatch({ type: "decrement" })}>
                    <PiMinus />
                  </button>
                  <span>{String(state.count).padStart(2, "0")}</span>
                  <button onClick={() => dispatch({ type: "increment" })}>
                    <PiPlus />
                  </button>
                </div>
                <Button
                  icon={<ReceiptIcon />}
                  title={isLargeScreen ? "incluir ∙" : "pedir ∙"}
                  price={dish.price}
                  onClick={() => handleAddToCart(dish.title, dish.price)}
                />
              </>
            ) : (
              <Button
                title="Editar prato"
                onClick={handleEditPage}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
