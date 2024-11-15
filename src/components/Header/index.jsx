import { Container, MenuIcon, ReceiptIcon, Counter } from "./styles";
import { Logo } from "../Logo";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Header() {
  const { count } = useContext(CartContext);

  return (
    <Container>
      <Link to="/menu">
        <MenuIcon />
      </Link>
      <Logo size="1.5rem" />
      <Link to="/details" className="receiptContainer">
        <ReceiptIcon />
        <Counter>
          <span>{count}</span>
        </Counter>
      </Link>
    </Container>
  );
}
