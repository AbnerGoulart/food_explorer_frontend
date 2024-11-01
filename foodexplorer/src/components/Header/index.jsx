import { Container, MenuIcon, ReceiptIcon, Counter } from "./styles";
import { Logo } from "../Logo";
import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

export function Header() {
  const { count } = useContext(CounterContext);

  return (
    <Container>
      <MenuIcon />
      <Logo size="1.5rem" />
      <div className="receiptContainer">
        <ReceiptIcon />
        <Counter>
          <span>{count}</span>
        </Counter>
      </div>
    </Container>
  );
}
