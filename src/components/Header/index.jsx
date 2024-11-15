import { Container, MenuIcon, ReceiptIcon, Counter } from "./styles";
import { Logo } from "../Logo";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { count } = useContext(CartContext);

  return (
    <Container>
      <MenuIcon />
      <Logo size="1.5rem" />
      <button className="receiptContainer">
        <ReceiptIcon />
        <Counter>
          <span>{count}</span>
        </Counter>
      </button>
    </Container>
  );
}
